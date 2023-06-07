/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					sky: '#18a5d6',
					cream: '#f6f1eb',
					secondary: '#20232a'
				}
			}
		}
	},
	plugins: []
}
