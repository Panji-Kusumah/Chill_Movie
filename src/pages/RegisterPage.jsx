import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';
import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import loginBG from '../assets/image/loginBG.jpg';
import { getUsers, saveUsers } from '../utilities/auth';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        setError('');
        if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
            setError("Seluruh kolom wajib diisi.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Konfirmasi kata sandi tidak sesuai.");
            return;
        }
        const users = getUsers();
        const isExist = users.some(
            user => user.username.toLowerCase() === username.trim().toLowerCase()
        );
        if (isExist) {
            setError("Username sudah digunakan.");
            return;
        }
        const newUser = {
            username: username.trim(),
            password
        };
        users.push(newUser);
        saveUsers(users);
        navigate('/login');
    };
    return (
        <AuthLayout
            title="Daftar"
            subtitle="Selamat Datang!"
            backgroundImage={loginBG}
        >
            <form onSubmit={handleRegister} className="flex flex-col gap-[20px] md:gap-[24px] w-full">
                
                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-[13px] px-4 py-2 rounded-lg text-center animate-pulse">
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
                    <InputField
                        label="Konfirmasi Kata Sandi"
                        type="password"
                        placeholder="Masukkan kembali kata sandi"
                        icon={eyeOffIcon}
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                    />
                    <div className="flex items-center text-[10px] md:text-[14px] px-1 mt-1">
                        <span className="text-white/60 whitespace-nowrap">
                            Sudah punya akun?{' '}
                            <Link to="/login" className="text-white font-bold hover:underline ml-1">
                                Masuk
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] md:gap-[16px] mt-2">
                    <Button type="submit">Daftar</Button>
                    <div className="text-center text-white/50 text-sm">Atau</div>
                    <Button type="button" variant="outline" icon={googleIcon}>
                        Daftar dengan Google
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;