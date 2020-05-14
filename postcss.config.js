const purgecss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./src/**/*.html',
		'./src/**/*.svelte'
	],

	whitelistPatterns: [/svelte-/],
	/* whitelist: ['mode-dark'], */

	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});
console.log('postcss')
const production = !process.env.ROLLUP_WATCH

module.exports = {
	plugins: [
		require('tailwindcss'),
		...(production ? [purgecss] : [])
	]
};