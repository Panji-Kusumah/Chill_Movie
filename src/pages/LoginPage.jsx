import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import { useAuthStore } from '../store/useAuthStore';
import { getUsers } from '../utilities/auth';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { loginZustand } = useAuthStore();
    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        if (!username.trim() || !password.trim()) {
            setError("Username dan Password Wajib Diisi.");
            return;
        }
        const users = getUsers();
        const foundUser = users.find(
            user =>
                user.username.toLowerCase() === username.trim().toLowerCase() &&
                user.password === password
        );
        //nyoba buat login pake zustand
        if (foundUser) {
            loginZustand(foundUser.username);
            navigate('/home');
        } else {
            setError("Username atau Password salah.");
        }
    };
    return (
        <AuthLayout title="Masuk" subtitle="Selamat datang kembali!">
            <form onSubmit={handleLogin} className="w-full flex flex-col gap-[20px] md:gap-[24px]">
                {error && <p className="text-red-500 text-[12px] text-center -mb-2 font-bold">{error}</p>}
                
                <InputField
                    label="Nama Pengguna"
                    type="text"
                    placeholder="Masukkan nama pengguna"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <InputField
                        label="Password"
                        type="password"
                        placeholder="Masukkan Password"
                        icon={eyeOffIcon}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="flex justify-between items-center text-[10px] md:text-[14px] px-1 font-lato">
                        <span className="text-white/60">
                            Belum punya akun? <Link to="/register" className="text-white font-bold hover:underline ml-1">Daftar</Link>
                        </span>
                        <a href="#" className="text-white/60 hover:text-white transition">Lupa kata sandi?</a>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] md:gap-[16px] mt-2">
                    <Button type="submit">Masuk</Button>
                    <div className="text-center text-white/50 text-sm">Atau</div>
                    <Button type="button" variant="outline" icon={googleIcon}>
                        Masuk dengan Google
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;