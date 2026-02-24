/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'laptop': '1366px',
            'desktop': '1920px',
            'ultrawide': '2560px',
        },
        extend: {},
    },
    plugins: [],
}

