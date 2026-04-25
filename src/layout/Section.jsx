const Section = ({ title, children, className = "" }) => {
    return (
        <section className={`px-8 py-20 first:pt-40 last:pb-70 ${className}`}>
            <h2 className="text-4xl font-bold mb-10 text-hero-gradient w-fit">
                {title}
            </h2>
            <div>{children}</div>
        </section>
    );
};

export default Section;
