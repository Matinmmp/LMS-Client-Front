import { tv } from "tailwind-variants";

export const title = tv({
    base: "tracking-tight inline font-semibold",
    variants: {
        color: {
            violet: "from-[#FF1CF7] to-[#b249f8]",
            yellow: "from-[#FF705B] to-[#FFB457]",
            blue: "from-primary-200 to-primary-500",
            secondary: "from-secondary-300 to-secondary-500",
            green: "from-[#6FEE8D] to-[#17c964]",
            pink: "from-[#FF72E1] to-[#F54C7A]",
            foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
            blue2:"bg-gradient-to-r from-secondary-200 to-primary-400 bg-clip-text text-transparent"
        },
        size: {
            sm: "text-3xl lg:text-4xl",
            md: "text-[2.3rem] lg:text-5xl leading-9",
            lg: "text-4xl lg:text-6xl",
        },
        fullWidth: {
            true: "w-full block",
        },
    },
    // defaultVariants: {
    //     size: "md",
    // },
    compoundVariants: [
        {
            color: [
                "violet",
                "yellow",
                "blue",
                "secondary",
                "green",
                "pink",
                "foreground",
            ],
            class: "bg-clip-text text-transparent bg-gradient-to-b",
        },
    ],
});

export const subtitle = tv({
    base: "w-full block max-w-full text-[#1f1f1f] dark:text-[#eeeeee]",
    variants: {
        fullWidth: {
            true: "!w-full",
        },
    },
    defaultVariants: {
        fullWidth: true,
    },
});
