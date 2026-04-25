const Certification = ({ date, title, description = "" }) => (
    <li className="flex items-center">
        <h4 className="pr-4 w-35 flex-shrink-0 text-xl">{date}</h4>
        <h5 className="pr-4 w-75 flex-shrink-0 text-xl text-text-soft">
            {title}
        </h5>
        {description && (
            <p className="px-4 text-text-soft text-xl">{description}</p>
        )}
    </li>
);

export default Certification;
