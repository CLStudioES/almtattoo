/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			/*Básicos*/
			'white': '#ffffff',
			'black': '#000000',
			/*Básicos*/
			/*Paleta pastel*/
			'matcha': '#809671',
			'almond': '#E5E0D0',
			'pistache': '#B3B792',
			'chai': '#D2AB80',
			'carob': '#725C3A',
			'vanilla': '#E5D2B8',
			/*Paleta otoño*/
			'otoño-bsugar': '#B87B5C',
			'otoño-wheat': '#F4DDB8',
			'otoño-moss': '#8F9562',
			'otoño-chestnut': '#90533B',
			'otoño-gold': '#DA983C',
			'otoño-darkGreen': '#495235',
		},
	},
	plugins: [
		animations
	],
}
