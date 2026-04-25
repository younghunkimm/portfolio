import { useEffect, useRef } from "react";
import mermaid from "mermaid";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
});

const Mermaid = ({ chart }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) return;

        const id = "mermaid-" + crypto.randomUUID();

        ref.current.innerHTML = "";

        setTimeout(() => {
            mermaid.render(id, chart.trim()).then(({ svg }) => {
                if (ref.current) {
                    ref.current.innerHTML = svg;
                }
            });
        }, 0); // 👉 이거 중요 (렌더 타이밍 보정)
    }, [chart]);

    return <div ref={ref} />;
};

export default Mermaid;
