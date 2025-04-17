'use client'

import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, a11yLight, atelierSulphurpoolLight, atelierLakesideDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code = ({ lang, children }: { lang: string, children: React.ReactNode }) => {
  
    return (
        <div className="text-sm md:text-base rounded-md overflow-x-auto ">
            <SyntaxHighlighter showLineNumbers={true} wrapLines={true} dir="ltr" language={lang} style={atelierLakesideDark }>
                {`${children}`}
            </SyntaxHighlighter>
        </div>

    );
}
export default Code
