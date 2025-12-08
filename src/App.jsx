import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import CouponPopPage from "./pages/CouponPop";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/couponpop" element={<CouponPopPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
