const Section = ({ title, children, className = "" }) => {
    return (
        <section className={`px-8 py-8 first:pt-30 last:pb-70 ${className}`}>
            <h2 className="text-3xl font-bold mb-10 text-primary">{title}</h2>
            <div>{children}</div>
        </section>
    );
};

export default Section;
