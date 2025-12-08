import { copyFile } from "fs";

copyFile("dist/index.html", "dist/404.html", (err) => {
    if (err) {
        console.error("❌ 404.html 생성 실패:", err);
    } else {
        console.log("✅ 404.html 생성 완료");
    }
});
