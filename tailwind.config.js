/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#302F2D',
				block: '#191918',
			},
		},
		screens: {
			xl: { max: '1440px' },
			// => @media (max-width: 1439px) { ... }

			lg: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			md: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			sm: { max: '835px' },
			// => @media (max-width: 835px) { ... }

			'min-2sm': '835px',
			// => @media (min-width: 835px) { ... }

			'3sm': { max: '665px' },
			// => @media (max-width: 665px) { ... }
		},
	},
	plugins: [],
}
