import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import url from '@rollup/plugin-url';
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'
import markdown from '@jackfranklin/rollup-plugin-markdown'
import glob from 'rollup-plugin-glob'
import alias from '@rollup/plugin-alias'
/* import autoPreprocess from 'svelte-preprocess' */
import sveltePreprocess from 'svelte-preprocess'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const aliases = {
  '@': path.resolve(__dirname, 'src')
}

const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);
//const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

const preprocess = sveltePreprocess({
	postcss: true,
});


export default {
  client: {
		treeshake: false,
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      glob(),
      markdown(),
      alias({ entries: aliases }),
      replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
      svelte({
        preprocess,
				compilerOptions: {
					dev,
					hydratable: true
				},
        emitCss: false
      }),
			url({
				sourceDir: path.resolve(__dirname, 'src/node_modules/images'),
				publicPath: '/client/'
			}),
      resolve({
        browser: true,
				dedupe: ['svelte'],
				mainFields: ['main', 'module'] /// <-- sveltefire
			}),
			commonjs(/*{
				namedExports: {
					// left-hand side can be an absolute path, a path
					// relative to the current directory, or the name
					// of a module in node_modules
					'node_modules/idb/build/idb.js': ['openDb'],
					'node_modules/firebase/dist/index.cjs.js': ['initializeApp', 'firestore']
				},
			}*/),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
				babelHelpers: 'runtime',
        exclude: ['node_modules/@babel/**'],
        presets: [
          ['@babel/preset-env', {
            targets: '> 0.25%, not dead'
          }]
        ],
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          ['@babel/plugin-transform-runtime', {
            useESModules: true
          }]
        ]
      }),

      !dev && terser({
        module: true
      })
    ],

		preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
		output: config.server.output(),
    plugins: [
      glob(),
      markdown(),
      alias({ entries: aliases }),
      replace({
				preventAssignment: true,
				values:{
					'process.browser': false,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
      }),
      svelte({
				compilerOptions: {
					dev,
					generate: 'ssr',
					hydratable: true
				},
				emitCss: false,
				preprocess,
      }),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),
		preserveEntrySignatures: 'strict',
		onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
			replace({
				preventAssignment: true,
				values:{
					'process.browser': true,
					'process.env.NODE_ENV': JSON.stringify(mode)
				},
			}),
      commonjs(),
      !dev && terser()
    ],
		preserveEntrySignatures: false,
    onwarn,
  }
}
