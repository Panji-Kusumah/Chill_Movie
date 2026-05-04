/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'chill-dark': '#181A1C',
                'chill-card': 'rgba(24, 26, 28, 0.84)', 
                'chill-button': '#2F3334',
                'chill-border': '#E7E3E3',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}