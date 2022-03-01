const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'stargazer': '#0d1733',
				'chaos': '#7d23cc',
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-animatecss')
	]
};

module.exports = config;
