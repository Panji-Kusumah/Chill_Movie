import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

function App() {
    return (
        <Router>
            <Routes>
                {/* Login & Register */}
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Halaman utama dengan layout */}
                <Route element={<MainLayout />}>
                    <Route path="/home" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;