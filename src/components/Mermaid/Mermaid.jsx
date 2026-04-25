import { useEffect, useRef } from "react";
import mermaid from "mermaid/dist/mermaid.esm.mjs";

mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
});

const Mermaid = ({ chart }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current || !chart) return;

        const renderMermaid = async () => {
            const id = `mermaid-${crypto.randomUUID()}`;
            const el = ref.current;

            try {
                const { svg } = await mermaid.render(id, chart.trim());
                if (el) el.innerHTML = svg;
            } catch (e) {
                console.error("Mermaid render failed:", e);
            }
        };

        renderMermaid();
    }, [chart]);

    return <div ref={ref} />;
};

export default Mermaid;
