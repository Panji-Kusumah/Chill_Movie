import { Navigate } from "react-router-dom";
import { useAuthStore } from '../store/useAuthStore';
const ProtectedRoute = ({ children }) => {
    // Ambil data user dari Zustand
    const { currentUser } = useAuthStore();
    // Kalo ga ada user, balik ke login
    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }
    return children;
};
export default ProtectedRoute;