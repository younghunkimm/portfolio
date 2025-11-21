const TechStackTitle = ({ title }) => {
    return <div className="text-lg font-semibold mb-3">{title}</div>;
};

const TechStackList = ({ children }) => {
    return <div className="flex gap-x-3 gap-y-3 flex-wrap">{children}</div>;
};

const TechStackItem = ({ children }) => {
    return (
        <div className="flex items-center gap-x-1 rounded-lg border border-transparent text-xs bg-slate-900 px-3 py-2">
            {children}
        </div>
    );
};

const TechStack = () => {
    return (
        <div className="flex flex-col gap-y-5">
            <div>
                <TechStackTitle title="Language" />
                <TechStackList>
                    <TechStackItem>Java</TechStackItem>
                    <TechStackItem>Kotlin</TechStackItem>
                    <TechStackItem>PHP</TechStackItem>
                    <TechStackItem>HTML</TechStackItem>
                    <TechStackItem>CSS</TechStackItem>
                    <TechStackItem>Javascript</TechStackItem>
                </TechStackList>
            </div>

            <div>
                <TechStackTitle title="Framework" />
                <TechStackList>
                    <TechStackItem>Spring Boot</TechStackItem>
                    <TechStackItem>Laravel</TechStackItem>
                </TechStackList>
            </div>

            <div>
                <TechStackTitle title="Infra & DB" />
                <TechStackList>
                    <TechStackItem>AWS</TechStackItem>
                    <TechStackItem>Docker</TechStackItem>
                    <TechStackItem>MySQL</TechStackItem>
                    <TechStackItem>Redis</TechStackItem>
                    <TechStackItem>RabbitMQ</TechStackItem>
                    <TechStackItem>JPA</TechStackItem>
                </TechStackList>
            </div>

            <div>
                <TechStackTitle title="Monitoring" />
                <TechStackList>
                    <TechStackItem>Grafana</TechStackItem>
                    <TechStackItem>Prometheus</TechStackItem>
                </TechStackList>
            </div>

            <div>
                <TechStackTitle title="Tool & IDE" />
                <TechStackList>
                    <TechStackItem>Git</TechStackItem>
                    <TechStackItem>IntelliJ</TechStackItem>
                    <TechStackItem>VS Code</TechStackItem>
                    <TechStackItem>Github</TechStackItem>
                </TechStackList>
            </div>
        </div>
    );
};

export default TechStack;
