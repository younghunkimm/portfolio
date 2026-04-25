import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const Mermaid = ({ chart }) => {
    const ref = useRef(null);
    const rendered = useRef(false);

    useEffect(() => {
        if (rendered.current) return;
        rendered.current = true;

        const id = "mermaid-" + Math.random().toString(36).slice(2);

        mermaid.initialize({ startOnLoad: false, theme: "dark" });

        mermaid.render(id, chart.trim()).then(({ svg }) => {
            if (ref.current) {
                ref.current.innerHTML = svg;
            }
        });
    }, [chart]);

    return <div ref={ref} />;
};

export default Mermaid;
