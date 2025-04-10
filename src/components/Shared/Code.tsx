'use client'

 
import { useTheme } from "next-themes";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, a11yLight ,atelierSulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ lang, children }: { lang: string, children: React.ReactNode }) => {
    const {theme:t} = useTheme()
    const theme = localStorage.getItem('theme')
    console.log(theme)
    return (
        <SyntaxHighlighter showLineNumbers={true} wrapLines={true}  dir="ltr" language={lang} style={ theme !== 'light' ? a11yDark : atelierSulphurpoolLight}>
            {`${children}`}
        </SyntaxHighlighter>


    );
}
export default Code
