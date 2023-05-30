/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: '#a8e063',
					secondary: '#20232a'
				}
			}
		}
	},
	plugins: []
}
