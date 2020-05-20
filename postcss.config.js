const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/**/*.scss'
	],

	whitelistPatterns: [/svelte-/],
	/* whitelist: ['mode-dark'], */

	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});
console.log('postcss')
const production = !process.env.ROLLUP_WATCH

module.exports = {
	plugins: [
		require('tailwindcss'),
		...(production ? [purgecss] : [])
	]
};