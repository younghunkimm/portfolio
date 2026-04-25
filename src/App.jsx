import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import CouponPopPage from "./pages/CouponPop";
import CuvCoursePage from "./pages/CuvCourse";
import TodoApiPage from "./pages/TodoApi";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/couponpop" element={<CouponPopPage />} />
            <Route path="/cuv-course" element={<CuvCoursePage />} />
            <Route path="/todo-api" element={<TodoApiPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default App;
