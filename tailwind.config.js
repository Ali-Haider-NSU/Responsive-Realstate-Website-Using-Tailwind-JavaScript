/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*"],
    theme: {
        extend: {
            colors: {
                green: '#00B98E',
                blue: '#0E2E50',
                gray: '#737373'
            },
            screens: {
                'sm': '600px',
                'md': '800px',
                'lg': '1000px',
                'xl': '1200px',
                'xxl': '1400px'
            },
        },
    },
    plugins: [],
}