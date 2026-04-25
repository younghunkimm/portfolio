const ContentBox = ({ title, children, className = "" }) => (
    <div
        className={`rounded-lg border border-border bg-black/10 p-6 space-y-4 mt-3 ${className}`}
    >
        {title && (
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
        )}
        {children}
    </div>
);

export default ContentBox;
