import { colors, nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/blogAssetes/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {

            fontFamily: {
                // sans: ["var(--font-baloo)"],
                mono: ["var(--font-inter)"],
                sans: ["var(--font-vazir)"],
            },
            screens: {
                'sm': '576px',
                'sm2': '640px',
                'md': '768px',
                'md2': '850px',
                'lg': '992px',
                'lg2': '1100px',
                'xl': '1200px',
                '2xl': '1400px',
            },
            colors: {
                white: "#fff",
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
                    100: "#CFFCD1",
                    200: "#A1F9AC",
                    300: "#6FEE8D",
                    400: "#4ADE7B",
                    500: "#17c964",
                    600: "#10AC63",
                    700: "#0B905F",
                    800: "#077457",
                    900: "#046050",
                    DEFAULT: "#17c964",
                },
                secondary: {
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
                    // DEFAULT:"#06B6D4"
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

    safelist: [
        // --- Explicit Core Classes (Not easily covered by patterns or essential) ---
        'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'grid', 'table', 'table-row', 'table-cell', 'hidden', // Display
        'italic', 'not-italic', // Font Style
        'list-none', 'list-disc', 'list-decimal', // List Style Type
        'list-inside', 'list-outside', // List Style Position
        'text-justify', 'text-left', 'text-center', 'text-right', // Text Alignment
        'whitespace-pre-wrap', 'break-words', // Code blocks
        'transform', 'transition-all', 'transition-colors', 'transition-transform', // Transitions/Transforms Base
        'cursor-pointer', // Interactivity
        'flex-shrink-0', // Icons
        'object-cover', // Images
        'caption-top', // Tables
        'relative', 'absolute', // Positioning (might be needed for specific layouts/icons)

        // --- Patterns for Utilities with Values ---

        // Spacing (Margin, Padding) - Covers most common values + px/auto
        {
            pattern: /^-?(p|m)(t|b|l|r|x|y)?-(?:px|auto|0|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32|36|40|44|48|52|56|60|64|72|80|96)$/,
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        // Space Between (for flex/grid column/row gaps) - Less common directly in DB HTML, but good to have
        // {
        //   pattern: /^space-(x|y)-(\d+|px)$/,
        //   variants: ['sm', 'md', 'lg', 'xl'],
        // },
        // Gap for Grid/Flex
        {
            pattern: /^gap(?:-(x|y))?-(?:px|0|1|1\.5|2|2\.5|3|3\.5|4|5|6|7|8|9|10|11|12|14|16|20|24|28|32)$/,
            variants: ['sm', 'md', 'lg', 'xl'],
        },

        // Sizing (Width, Height, Max-Width)
        {
            pattern: /^(w|h)-(?:px|auto|full|screen|\d+(\/\d+)?)$/, // handles fractions like 1/2, 1/3, full, screen, px, numbers
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        {
            pattern: /^max-w-(?:none|xs|sm|md|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|full|min|max|prose)$/,
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        {
            pattern: /^(max-h)-.+$/, // Keep max-height simple for now
            variants: ['sm', 'md', 'lg', 'xl'],
        },


        // Typography (Size, Weight, Leading)
        {
            pattern: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        {
            pattern: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
        },
        {
            pattern: /^leading-(?:tight|snug|normal|relaxed|loose|\d+)$/, // Added common number line heights too
        },
        {
            pattern: /^font-(mono|sans|serif)$/, // Font families
        },

        // Colors (Background, Text, Border, Divide, Ring) - Needs careful tuning based on your palette
        // Covers primary, secondary, success, warning, danger, info + common grays + white/black/transparent
        {
            pattern: /^(bg|text|border|divide|ring)-(primary|secondary|success|warning|danger|info|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black|transparent)$/,
            variants: ['dark', 'hover', 'focus', 'group-hover', 'marker'], // Include 'marker' variant
        },
        {
            // Covers color shades (e.g., primary-500, gray-200)
            pattern: /^(bg|text|border|divide|ring)-(primary|secondary|success|warning|danger|info|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(\d00?|DEFAULT)$/, // Handles 50, 100-900, DEFAULT
            variants: ['dark', 'hover', 'focus', 'group-hover', 'marker', 'odd', 'even'], // Include table variants
        },
        {
            // Covers colors with opacity (e.g., bg-primary-500/80) - adjust opacity values if needed
            pattern: /^(bg|text|border|divide|ring)-(\w+)-(\d00?|DEFAULT)\/(?:[1-9]\d|100|[5-9])$/, // Matches /10 to /100 and common small ones like /5
            variants: ['dark', 'hover'],
        },
        {
            // Specific dark background opacities seen
            pattern: /^dark:bg-(gray|primary|secondary|indigo|info|teal|green|blue|purple|red)-(\d00?)\/(30|40|50|60|70|80|90)$/,
        },

        // Borders (Width, Radius, Style)
        {
            pattern: /^border(?:-(t|b|l|r|x|y))?(?:-(\d))?$/, // border, border-t, border-4, border-t-2 etc.
            variants: ['dark', 'hover'],
        },
        {
            pattern: /^rounded(?:-(t|b|l|r|tl|tr|bl|br))?-(?:none|sm|md|lg|xl|2xl|3xl|full)?$/, // rounded, rounded-lg, rounded-t-xl etc.
        },
        {
            pattern: /^divide-(x|y)(?:-(\d))?$/, // Divide width
            variants: ['dark'],
        },

        // Effects (Shadow, Opacity)
        {
            pattern: /^shadow-(?:sm|md|lg|xl|2xl|inner|none)$/,
            variants: ['hover', 'dark:hover'], // Allow hover shadow
        },
        // Specific hover shadow colors used in the example
        {
            pattern: /^hover:shadow-(primary|secondary|success|warning|danger|purple|red|yellow|green|blue|teal|indigo)-(\d00)\/(\d{1,2})$/,
            variants: ['dark'],
        },
        {
            pattern: /^opacity-(0|5|10|20|25|30|40|50|60|70|75|80|90|95|100)$/,
            variants: ['hover'],
        },

        // Transitions & Transforms
        {
            pattern: /^(duration|delay)-(\d+)$/, // Durations like duration-150, duration-300
        },
        {
            pattern: /^(scale|scale-x|scale-y)-(\d+)$/, // Scale like scale-105, scale-110
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /^(translate-x|translate-y)-(-?(\d|px|full|1\/2))$/, // Translate like -translate-y-1, translate-x-full
            variants: ['hover', 'group-hover'],
        },
        {
            pattern: /rotate-(0|45|90|180)$/, // Rotate for icons etc.
            variants: ['group-open'],
        },

        // Flexbox & Grid Specifics (Might need expansion based on usage)
        {
            pattern: /^(items|justify|content|self)-(start|end|center|between|around|evenly|stretch|baseline)$/,
        },
        {
            pattern: /^flex-(row|col|row-reverse|col-reverse|wrap|nowrap|wrap-reverse|grow|shrink)(?:-(\d))?$/, // flex-1, flex-row etc.
        },
        {
            pattern: /^grid-cols-(\d+|none)$/, // grid-cols-1, grid-cols-3
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        {
            pattern: /^col-span-(\d+|full)$/, // col-span-2
            variants: ['sm', 'md', 'lg', 'xl'],
        },
        // Add patterns for grid-rows, row-span if used heavily.

        // ----- Add more specific patterns or explicit classes if needed -----
    ],
    darkMode: "class",
    plugins: [nextui({}),
    ],
}
