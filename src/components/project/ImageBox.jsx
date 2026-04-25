import ZoomImage from "../image/ZoomImage";

const ImageBox = ({ label, src }) =>
    src ? (
        <ZoomImage
            src={src}
            alt={label}
            className="block max-w-full h-auto rounded-lg"
        />
    ) : (
        <div className="flex h-64 items-center justify-center rounded-lg border border-dashed border-border bg-black/5 text-sm text-text-soft">
            {label}
        </div>
    );

export default ImageBox;
