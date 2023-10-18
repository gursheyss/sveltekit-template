/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				obviously: ['obviously'],
				obviouslywide: ['obviously-wide'],
				obviouslycondensed: ['obviously-condensed']
			},
			colors: {
				purple: '#242038',
				lilac: '#C297B8',
				pink: '#FDCFF3',
				darkpink: '#DE89BE',
				beige: '#ebe7d7'
			}
		}
	},

	plugins: []
};

module.exports = config;
