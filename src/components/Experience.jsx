const Experience = ({ period, topic, description }) => (
    <li className="flex items-center">
        <h4 className="pr-4 w-60 flex-shrink-0">{period}</h4>
        <h5 className="pr-4 w-40 flex-shrink-0 text-text-soft">{topic}</h5>
        <p className="px-4 text-text-soft">{description}</p>
    </li>
);

export default Experience;
