/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                grayf4: "#F4F4F4",
                grayfc: "#FcFcFc",
                gray80: "#808191",
                primaryText: "#11142D",
                primary: "#475BE8",
            },
            spacing: {
                c10: "10px",
            },
        },
    },
    plugins: [],
};
