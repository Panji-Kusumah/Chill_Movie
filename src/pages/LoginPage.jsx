import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import loginBG from '../assets/image/loginBG.jpg';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');

        if (!username || !password) {
            setError("Username dan kata sandi wajib diisi.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const foundUser = users.find(
            user => user.username === username && user.password === password
        );

        if (foundUser) {
            navigate('/home');
        } else {
            setError("Username atau kata sandi salah.");
        }
    };

    return (
        <AuthLayout title="Masuk" subtitle="Selamat Datang Kembali !" backgroundImage={loginBG}>
            <form onSubmit={handleLogin} className="flex flex-col gap-[20px] md:gap-[24px] w-full">
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-[13px] px-4 py-2 rounded-lg text-center animate-shake">
                        {error}
                    </div>
                )}
                <InputField 
                    label="Username" 
                    placeholder="Masukkan username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <InputField
                        label="Kata Sandi"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        icon={eyeOffIcon}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className="flex justify-between items-center text-[10px] md:text-[14px] px-1">
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