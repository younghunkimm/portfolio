import { Link } from "react-router-dom";

const Section = ({ title, link, children, className = "" }) => {
    const content = (
        <>
            {title}
            {link && " 🔗"}
        </>
    );

    return (
        <section className={`px-8 py-20 first:pt-40 last:pb-70 ${className}`}>
            <h2 className="text-4xl font-bold mb-10 text-hero-gradient w-fit">
                {link ? (
                    <Link to={link} target="_blank" rel="noopener noreferrer">
                        {content}
                    </Link>
                ) : (
                    content
                )}
            </h2>
            <div>{children}</div>
        </section>
    );
};

export default Section;
