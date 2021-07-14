module.exports = {
    purge: [
        "./components/**/*.{vue,js}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            // Extend the theme with custom colors
            colors: {
                gray: {
                    dev: "#191e25",
                    dev2: "#1a2634",
                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
