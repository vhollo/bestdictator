module.exports = {
  purge: [],
  theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
		},
		
    extend: {
			colors: {
				dark_main: '#ff3d00',
				orange: '#ff3d00',
				light_main: '#c0ff55',
				light: '#eee',
				dark: '#111',
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
	},
  plugins: [
		require('tailwindcss-dark-mode')()
	], */
}
