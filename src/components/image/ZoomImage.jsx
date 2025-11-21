import { useState } from "react";

const ZoomImage = ({ src, alt, className = "", ...props }) => {
    const [open, setOpen] = useState(false);

    const openZoom = () => setOpen(true);
    const closeZoom = () => setOpen(false);

    return (
        <>
            {/* 기본 이미지 (작은 사이즈) */}
            <img
                src={src}
                alt={alt}
                className={`cursor-zoom-in ${className}`}
                onClick={openZoom}
                {...props}
            />

            {/* 확대 이미지 모달 */}
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={closeZoom}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[90vh] max-w-[90vw] rounded-lg cursor-zoom-out"
                    />
                </div>
            )}
        </>
    );
};

export default ZoomImage;
