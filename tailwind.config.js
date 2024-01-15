/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			boxShadow: {
				great: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;'
			},
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
