import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CodeBlock.module.css";

const CodeBlock = ({ language, children }) => {
    return (
        <div
            style={{
                background: "#1e1e1e",
                borderRadius: ".75rem",
                margin: ".5em 0",
                overflow: "hidden",
            }}
        >
            {/* 상단 바 */}
            <div
                style={{
                    display: "flex",
                    gap: ".6em",
                    padding: ".7em",
                    background: "#2d2d2d",
                }}
            >
                <div
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#ff5f56",
                    }}
                />
                <div
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#ffbd2e",
                    }}
                />
                <div
                    style={{
                        width: 12,
                        height: 12,
                        borderRadius: "50%",
                        background: "#27c93f",
                    }}
                />
            </div>

            <SyntaxHighlighter
                className={styles.scroll}
                language="java"
                style={oneDark}
                wrapLongLines
                showLineNumbers
                customStyle={{
                    padding: "1em",
                    fontSize: "1em",
                    background: "#1e1e1e",
                    overflowX: "auto",
                }}
                lineNumberStyle={{
                    minWidth: "2em",
                    flexShrink: 0,
                }}
            >
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;
