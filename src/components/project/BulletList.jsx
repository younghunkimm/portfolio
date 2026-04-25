const BulletList = ({ title, items, className = "" }) => (
    <>
        {title && <h4 className="font-bold mb-2">{title}</h4>}
        <ul className={`list-disc space-y-2 pl-5 text-text-soft ${className}`}>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </>
);

export default BulletList;
