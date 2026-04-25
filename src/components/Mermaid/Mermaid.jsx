import { useEffect, useRef } from "react";
import mermaid from "mermaid";

const id = `mermaid-${Math.random().toString(36).slice(2)}`;

const Mermaid = ({ chart }) => {
    const ref = useRef(null);

    useEffect(() => {
        mermaid.initialize({ startOnLoad: false, theme: "dark" });

        if (ref.current) {
            mermaid.render(id, chart).then(({ svg }) => {
                ref.current.innerHTML = svg;
            });
        }
    }, [chart]);

    return <div ref={ref} />;
};

export default Mermaid;
