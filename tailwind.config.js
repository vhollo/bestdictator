module.exports = {
  content: [
    // Example content paths...
    //'./public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		
    extend: {
			colors: {
				orange: '#ff3d00',
				green: '#c0ff55',
				light: '#eee',
				dark: '#111',
				darkgray: '#0f2537',
				lightgray: '#1f4667'
			},
			margin: {
				'96': '24rem',
				'128': '32rem',
			},
		},
  },
	/* variants: {
		backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
		borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
		textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder']
	}, */
  plugins: [
		/* require('tailwindcss-dark-mode')() */
	],
}
