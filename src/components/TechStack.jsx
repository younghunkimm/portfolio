import awsIcon from "../assets/icons/aws.png";
import cssIcon from "../assets/icons/css.png";
import dockerIcon from "../assets/icons/docker.png";
import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import grafanaIcon from "../assets/icons/grafana.png";
import htmlIcon from "../assets/icons/html.png";
import intellijIcon from "../assets/icons/intellij.png";
import javaIcon from "../assets/icons/java.png";
import jpaIcon from "../assets/icons/jpa.png";
import javascriptIcon from "../assets/icons/javascript.png";
import kotlinIcon from "../assets/icons/kotlin.png";
import mysqlIcon from "../assets/icons/mysql.png";
import rabbitmqIcon from "../assets/icons/rabbitmq.png";
import redisIcon from "../assets/icons/redis.png";
import springBootIcon from "../assets/icons/spring_boot.png";
import jqueryIcon from "../assets/icons/jquery.png";
import prometheusIcon from "../assets/icons/prometheus.png";
import vscodeIcon from "../assets/icons/vscode.png";
import postmanIcon from "../assets/icons/postman.png";
import notionIcon from "../assets/icons/notion.png";
import slackIcon from "../assets/icons/slack.png";
import phpIcon from "../assets/icons/php.png";
import laravelIcon from "../assets/icons/laravel.png";

const techStackGroup = [
    {
        title: "Language",
        items: [
            { name: "Java", icon: javaIcon },
            { name: "Kotlin", icon: kotlinIcon },
            { name: "PHP", icon: phpIcon },
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "Javascript", icon: javascriptIcon },
        ],
    },
    {
        title: "Framework & Library",
        items: [
            { name: "Spring Boot", icon: springBootIcon },
            { name: "Laravel", icon: laravelIcon },
            { name: "Jquery", icon: jqueryIcon },
        ],
    },
    {
        title: "Infra & DB",
        items: [
            { name: "AWS", icon: awsIcon },
            { name: "Docker", icon: dockerIcon },
            { name: "MySQL", icon: mysqlIcon },
            { name: "Redis", icon: redisIcon },
            { name: "RabbitMQ", icon: rabbitmqIcon },
            { name: "JPA", icon: jpaIcon },
        ],
    },
    {
        title: "Monitoring",
        items: [
            { name: "Grafana", icon: grafanaIcon },
            { name: "Prometheus", icon: prometheusIcon },
        ],
    },
    {
        title: "Tool & IDE",
        items: [
            { name: "Git", icon: gitIcon },
            { name: "IntelliJ", icon: intellijIcon },
            { name: "VSCode", icon: vscodeIcon },
            { name: "Github", icon: githubIcon },
            { name: "Postman", icon: postmanIcon },
            { name: "Notion", icon: notionIcon },
            { name: "Slack", icon: slackIcon },
        ],
    },
];

const TechStackTitle = ({ title }) => {
    return <div className="text-xl font-semibold mb-10">{title}</div>;
};

const TechStackList = ({ children }) => {
    return <div className="flex gap-5 flex-wrap">{children}</div>;
};

const TechStackIcon = ({ label, icon }) => {
    return (
        <div>
            {icon ? (
                <img
                    src={icon}
                    alt={label}
                    className="h-30 w-30 object-contain"
                    title={label}
                />
            ) : (
                label
            )}
        </div>
    );
};

const TechStack = () => {
    return (
        <div className="flex flex-col gap-y-10">
            {techStackGroup.map((group) => (
                <div key={group.title}>
                    <TechStackTitle title={group.title} />
                    <TechStackList>
                        {group.items.map((tech) => (
                            <TechStackIcon
                                key={tech.name}
                                label={tech.name}
                                icon={tech.icon}
                            />
                        ))}
                    </TechStackList>
                </div>
            ))}
        </div>
    );
};

export default TechStack;
