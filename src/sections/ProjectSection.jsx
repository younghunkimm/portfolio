import Section from "../layout/Section";
import BaseImage from "../components/image/BaseImage";

import CouponPopCover from "../assets/images/couponpop_cover.jpg";
import TeamSpartaCover from "../assets/images/teamsparta_cover.png";

import GithubIcon from "../components/icon/GithubIcon";
import HyperlinkIcon from "../components/icon/HyperlinkIcon";

const Role = ({ role }) => (
    <span className="mb-3 inline-flex w-fit items-center rounded-full bg-primary/20 px-3 py-1 text-sm font-semibold text-primary">
        {role}
    </span>
);

const ProjectImage = ({ image, title }) => (
    <div className="mb-4 aspect-video overflow-hidden rounded-xl bg-slate-900/60">
        {image ? (
            <BaseImage
                src={image}
                alt={title}
                className="block h-full w-full object-cover"
            />
        ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-black text-sm text-text-soft"></div>
        )}
    </div>
);

const ProjectHeader = ({ title, period }) => (
    <div className="mb-4">
        <h3 className="text-3xl font-semibold text-primary mb-1">{title}</h3>
        <p className="text-base text-text-soft">{period}</p>
    </div>
);

const TechStack = ({ stack }) => (
    <div className="mb-4 flex flex-wrap gap-2 text-sm">
        {stack.map((tech) => (
            <span
                key={tech}
                className="rounded-full bg-slate-800 px-3 py-1 text-text-soft"
            >
                {tech}
            </span>
        ))}
    </div>
);

const Description = ({ lines }) => (
    <div className="mb-6 space-y-2 text-base leading-relaxed text-text-soft">
        {lines.map((line) => (
            <p key={line}>{line}</p>
        ))}
    </div>
);

const ProjectLinks = ({ github, detail }) => (
    <div className="mt-auto flex gap-2">
        <a
            href={github}
            className="flex items-center rounded-lg border border-primary px-3 py-2 text-center text-sm font-semibold text-primary transition hover:bg-primary hover:text-black"
            target="_blank"
        >
            <GithubIcon className="w-4 h-4 inline-block mr-1" />
            Github
        </a>
        <a
            href={detail}
            className="flex items-center rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-black transition hover:opacity-90"
            target="_blank"
        >
            <HyperlinkIcon className="w-4 h-4 inline-block mr-1" />
            Detail
        </a>
    </div>
);

const ProjectCard = ({
    title,
    period,
    role,
    stack,
    description,
    github,
    detail,
    image,
}) => (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_28px_70px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20 transition duration-300 group-hover:opacity-30" />
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-primary/15 blur-3xl transition duration-500 group-hover:scale-110" />
        <div className="pointer-events-none absolute bottom-0 right-[-40px] h-40 w-40 rounded-full bg-primary/10 blur-3xl transition duration-500 group-hover:scale-110" />

        <div className="relative z-10 flex h-full flex-col">
            <Role role={role} />
            <ProjectImage image={image} title={title} />
            <ProjectHeader title={title} period={period} />
            <TechStack stack={stack} />
            <Description lines={description} />
            <ProjectLinks github={github} detail={detail} />
        </div>
    </article>
);

const ProjectsSection = () => {
    const projects = [
        {
            title: "쿠폰팝",
            period: "2025.10.13 ~ 2025.11.18 | 팀원 4명",
            role: "알림/배치 설계 및 개발",
            stack: ["Spring Boot", "MySQL", "RabbitMQ", "Redis", "FCM"],
            description: [
                "사용자의 현재 위치 기반으로 주변 매장에서 제공하는 한정 수량 쿠폰을 실시간 발급해주는 지역 특화 프로모션 플랫폼",
            ],
            github: "https://github.com/CouponPop",
            detail: `${import.meta.env.BASE_URL}couponpop`,
            image: CouponPopCover,
        },
        {
            title: "ERP 고도화",
            period: "2022.05.09 ~ 2025.05.01",
            role: "재고/정산 모듈 개선 및 유지보수",
            stack: ["PHP", "Laravel", "MySQL", "AWS"],
            description: [
                "정산·재고 핵심 쿼리와 캐싱을 최적화해 응답 시간을 단축했습니다.",
                "운영·배포 자동화를 통해 장애 대응 시간을 줄이고 안정성을 높였습니다.",
            ],
            github: "https://github.com/younghunkimm",
            detail: "#",
            image: TeamSpartaCover,
        },
        {
            title: "쇼핑몰 개발",
            period: "2022 ~ 2025",
            role: "프론트/백엔드 기능 개발",
            stack: ["PHP", "JavaScript", "MySQL", "Docker"],
            description: [
                "주문/결제 플로우를 안정화하고 운영툴을 확장해 CS 처리 시간을 줄였습니다.",
                "CI/CD를 단순화해 배포 리드타임을 단축하고 운영 안정성을 높였습니다.",
            ],
            github: "https://github.com/younghunkimm",
            detail: "#",
            image: TeamSpartaCover,
        },
    ];

    return (
        <Section title="Project" className="pt-10">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(
                    ({
                        title,
                        period,
                        role,
                        stack,
                        description,
                        github,
                        detail,
                        image,
                    }) => (
                        <ProjectCard
                            key={title}
                            title={title}
                            period={period}
                            role={role}
                            stack={stack}
                            description={description}
                            github={github}
                            detail={detail}
                            image={image}
                        />
                    )
                )}
            </div>
        </Section>
    );
};

export default ProjectsSection;
