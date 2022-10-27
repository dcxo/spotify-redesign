/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['src/**/*.{tsx,jsx,ts,js}', 'index.html'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1DB954',
                    50: '#9EF0BB',
                    100: '#8CEDAE',
                    200: '#69E796',
                    300: '#46E27D',
                    400: '#23DC64',
                    500: '#1DB954',
                    600: '#15893E',
                    700: '#0E5828',
                    800: '#062812',
                    900: '#000000',
                },
            },
            backgroundImage: {
                midnights: "url('/taylor-midnights-bg.jpg')",
            },
        },
    },
    plugins: [],
};
