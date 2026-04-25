import Section from "../layout/Section";
import PhoneIcon from "../components/icon/PhoneIcon";
import MailIcon from "../components/icon/MailIcon";
import personalInfo from "../config/personalInfo";

const ContactItem = ({ icon, label, value, href }) => {
    const Icon = icon;

    return (
        <a
            href={href}
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-text-soft shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:border-primary/40 hover:bg-white/[0.05]"
        >
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-primary transition group-hover:bg-primary group-hover:text-black">
                <Icon />
            </div>
            <div className="flex flex-col">
                <span className="text-sm tracking-[0.08em] text-primary/80">
                    {label}
                </span>
                <span className="text-lg font-semibold text-white">
                    {value}
                </span>
            </div>
        </a>
    );
};

const ContactSection = () => {
    return (
        <Section title="Contact" className="pb-32">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <ContactItem
                    icon={PhoneIcon}
                    label="Phone"
                    value={personalInfo.phone}
                    href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}
                />
                <ContactItem
                    icon={MailIcon}
                    label="Email"
                    value={personalInfo.email}
                    href={`mailto:${personalInfo.email}`}
                />
            </div>
        </Section>
    );
};

export default ContactSection;
