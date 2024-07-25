/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
        'custom-radial-1': 'radial-gradient(circle, rgba(0,212,255,1) 0%, rgba(2,0,36,0) 100%);',
      },
			colors:{
				'azul-cielo': '#119CFF',
				'azul-claro': '#97F8F4',
			}
		},
	},
	plugins: [],
}
