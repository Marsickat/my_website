/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./src/routes/**/*.{svelte,ts,js}',
		'./src/lib/**/*.{svelte,ts,js}',
		'./index.html'
	],
	darkMode: 'media', // или 'class' если потребуется ручное переключение
	theme: {
		extend: {
			colors: {
				accent: '#00e5c8',
				secondary: '#3b82f6', // синий
				violet: '#a78bfa'
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif']
			},
			boxShadow: {
				neon: '0 0 8px 2px #00e5c8, 0 0 16px 4px #00e5c880'
			},
			animation: {
				'bg-pulse': 'bgPulse 10s ease-in-out infinite',
				'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both'
			},
			keyframes: {
				bgPulse: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				fadeInUp: {
					'0%': { opacity: 0, transform: 'translateY(40px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			}
		}
	},
	plugins: [],
	plugins: []
};
