import { colors, nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-baloo)"],
                mono: ["var(--font-inter)"],
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1200px',
                '2xl': '1400px',
            },
            colors: {
                primary: {
                    100: "#CAEBFD",
                    200: "#96D3FB",
                    300: "#61B3F3",
                    400: "#3A93E8",
                    500: "#0065D9",
                    600: "#004EBA",
                    700: "#003A9C",
                    800: "#00287D",
                    900: "#001C68",
                    DEFAULT: "#0065D9",
                },
                success: {
                    100: "#E5FBC8",
                    200: "#C7F794",
                    300: "#9AE75C",
                    400: "#6FCF33",
                    500: "#38b000",
                    600: "#269700",
                    700: "#177E00",
                    800: "#0C6600",
                    900: "#045400",
                    DEFAULT: "#2F9E22",
                },
                info: {
                    100: "#CCF9FE",
                    200: "#9AEDFD",
                    300: "#68D8F9",
                    400: "#42C0F4",
                    500: "#079CED",
                    600: "#0579CB",
                    700: "#035AAA",
                    800: "#024089",
                    900: "#012D71",
                    DEFAULT: "#079CED",
                },
                warning: {
                    100: "#FFF3CC",
                    200: "#FFE499",
                    300: "#FFD266",
                    400: "#FFBF3F",
                    500: "#FFA100",
                    600: "#DB8200",
                    700: "#B76600",
                    800: "#934C00",
                    900: "#7A3A00",
                    DEFAULT: "#FFA100",
                },
                danger: {
                    100: "#FFCCCD",
                    200: "#FF99A6",
                    300: "#FF6689",
                    400: "#FF3F7F",
                    500: "#ff006e",
                    600: "#DB0074",
                    700: "#B70073",
                    800: "#93006C",
                    900: "#7A0065",
                    DEFAULT: "#ff006e",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
