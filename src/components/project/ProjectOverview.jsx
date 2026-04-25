import ContentBox from "./ContentBox";
import BulletList from "./BulletList";
import ImageBox from "./ImageBox";

const ProjectOverview = ({
    description,
    metrics = [],
    goals = [],
    imageSrc = null,
    imageAlt = "프로젝트 대표 이미지",
    info = [],
}) => {
    return (
        <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr]">
            {/* 설명 영역 */}
            <div className="space-y-6">
                <p className="text-lg leading-relaxed text-text-soft">
                    {description}
                </p>

                {metrics.length > 0 && (
                    <div className="grid gap-3 sm:grid-cols-3">
                        {metrics.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-lg border border-border bg-black/10 p-4"
                            >
                                <p className="text-xs uppercase tracking-wide text-text-soft">
                                    {item.label}
                                </p>
                                <p className="text-lg font-bold text-primary">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                )}

                {/* 🎯 핵심 목표 */}
                {goals.length > 0 && (
                    <ContentBox title="핵심 목표">
                        <BulletList items={goals} />
                    </ContentBox>
                )}
            </div>

            {/* 요약 영역 */}
            <div className="rounded-lg border border-border bg-black/10 p-6 space-y-4">
                <div className="overflow-hidden rounded-lg border border-border bg-black/5 flex justify-center">
                    <ImageBox src={imageSrc} label={imageAlt} />
                </div>

                <BulletList items={info} className="text-sm space-y-1 pl-4" />
            </div>
        </div>
    );
};

export default ProjectOverview;
