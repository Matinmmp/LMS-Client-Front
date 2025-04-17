'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, a11yLight, atelierSulphurpoolLight, atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ lang, children }: { lang: string, children: React.ReactNode }) => {
 
    // const theme = localStorage?.getItem('theme')
  
    return (
        <div className="bg-[#2d2d2d] dark:bg-gray-800 rounded-md overflow-x-auto ">
            {/* <SyntaxHighlighter showLineNumbers={true} wrapLines={true} dir="ltr" language={lang} style={theme !== 'light' ? atelierLakesideDark : atelierSulphurpoolLight}>
                {`${children}`}
            </SyntaxHighlighter> */}
        </div>

    );
}
export default Code
