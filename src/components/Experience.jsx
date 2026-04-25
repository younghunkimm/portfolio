const Experience = ({ period, topic, description }) => (
    <li className="flex items-center">
        <h4 className="pr-4 w-70 flex-shrink-0 text-xl">{period}</h4>
        <h5 className="pr-4 w-40 flex-shrink-0 text-xl text-text-soft">
            {topic}
        </h5>
        <p className="px-4 text-text-soft text-xl">{description}</p>
    </li>
);

export default Experience;
