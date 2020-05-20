import markdown from '@jackfranklin/rollup-plugin-markdown'
import glob from 'rollup-plugin-glob'
import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import path from 'path'
import pkg from './package.json'
/* import autoPreprocess from 'svelte-preprocess' */
import sveltePreprocess from 'svelte-preprocess'

const preprocess = sveltePreprocess({
	postcss: true,
  /* scss: {
		includePaths: ['src'],
	}, */
	/* postcss: {
		plugins: [require('autoprefixer')],
	}, */
});

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD
const aliases = {
  '@': path.resolve(__dirname, 'src')
}

const onwarn = (warning, onwarn) => (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning)
const dedupe = importee => importee === 'svelte' || importee.startsWith('svelte/');

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
		preserveEntrySignatures: 'false',
    plugins: [
      glob(),
      markdown(),
      alias({ entries: aliases }),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        dev,
				preprocess,
				/* preprocess: sveltePreprocess({ postcss: true }), */
        hydratable: true,
        emitCss: false
      }),
      resolve({
        browser: true,
        dedupe
      }),
      commonjs(),

      legacy && babel({
        extensions: ['.js', '.mjs', '.html', '.svelte'],
        runtimeHelpers: true,
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
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
				generate: 'ssr',
				/* preprocess: sveltePreprocess({ postcss: true }), */
				preprocess,
        dev
      }),
      resolve({
        dedupe
      }),
      commonjs()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    onwarn,
  }
}
