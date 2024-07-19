/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
        'custom-radial': 'radial-gradient(at center center, #008AFC00 30%, #008AFC61 100%)',
      },
			colors:{
				'azul-cielo': '#119CFF',
				'azul-claro': '#97F8F4',
			}
		},
	},
	plugins: [],
}
