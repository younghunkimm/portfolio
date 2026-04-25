import { Link } from "react-router-dom";

import { useEffect, useRef } from "react";
import GithubIcon from "../components/icon/GithubIcon";
import MailIcon from "../components/icon/MailIcon";
import LinkedInIcon from "../components/icon/LinkedInIcon";
import personalInfo from "../config/personalInfo";

const IntroSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const setInitialPosition = () => {
            const { width, height } = section.getBoundingClientRect();
            section.style.setProperty("--mouse-x", `${width / 2}px`);
            section.style.setProperty("--mouse-y", `${height / 2}px`);
        };

        setInitialPosition();

        let frame = null;
        const handlePointerMove = (event) => {
            if (frame) cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = section.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                section.style.setProperty("--mouse-x", `${x}px`);
                section.style.setProperty("--mouse-y", `${y}px`);
                frame = null;
            });
        };

        section.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("resize", setInitialPosition);

        return () => {
            section.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("resize", setInitialPosition);
            if (frame) cancelAnimationFrame(frame);
        };
    }, []);

    const socials = [
        {
            href: personalInfo.linkedin,
            icon: LinkedInIcon,
            color: "#0A66C2",
        },
        {
            href: personalInfo.github,
            icon: GithubIcon,
            color: "#E6EDF3",
        },
        {
            href: `mailto:${personalInfo.email}`,
            icon: MailIcon,
            color: "#EA4335",
        },
    ];

    const SocialButton = ({ href, icon: Icon, color }) => {
        return (
            <Link
                to={href}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_10px_45px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:bg-white/[0.08]"
                style={{
                    color,
                    borderColor: `${color}33`,
                    boxShadow: `0 12px 30px ${color}33`,
                }}
                target="_blank"
            >
                <Icon className="h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
            </Link>
        );
    };

    return (
        <section
            ref={sectionRef}
            className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-10 text-center shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
            style={{
                background:
                    "radial-gradient(circle at 20% 20%, rgba(72,75,90,0.35), transparent 35%), radial-gradient(circle at 80% 10%, rgba(119,111,169,0.2), transparent 30%), linear-gradient(135deg, rgba(16,17,24,0.95), rgba(12,12,18,0.92))",
            }}
        >
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="absolute inset-0 bg-[radial-gradient(720px_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),rgba(108,158,255,0.10),transparent_55%),radial-gradient(520px_at_15%_20%,rgba(118,255,214,0.12),transparent_60%),radial-gradient(520px_at_80%_15%,rgba(255,210,128,0.14),transparent_60%)] blur-3xl transition-[background-position] duration-200"
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/40" />
            </div>

            <h1 className="mb-6 text-8xl font-bold text-hero-gradient drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]">
                안녕하세요!
            </h1>
            <p className="text-3xl font-medium">
                {personalInfo.role}{" "}
                <span className="text-primary font-bold">
                    {personalInfo.name}
                </span>
                입니다.
            </p>

            <div className="mt-10 h-px w-48 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />

            <div className="mt-6 flex items-center gap-5 text-lg font-semibold">
                {socials.map((item) => (
                    <SocialButton key={item.href} {...item} />
                ))}
            </div>
        </section>
    );
};

export default IntroSection;
