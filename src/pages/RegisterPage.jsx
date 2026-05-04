import { Link } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';

import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import loginBG from '../assets/image/loginBG.jpg';

const RegisterPage = () => {
    return (
        <AuthLayout
            title="Daftar"
            subtitle="Selamat Datang!"
            backgroundImage={loginBG}
        >
            <form className="flex flex-col gap-[20px] md:gap-[24px] w-full">
                {/* Input Username */}
                <InputField label="Username" placeholder="Masukkan username" />

                {/* Group Input Kata Sandi & Konfirmasi */}
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <InputField
                        label="Kata Sandi"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        icon={eyeOffIcon}
                    />
                    <InputField
                        label="Konfirmasi Kata Sandi"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        icon={eyeOffIcon}
                    />
                    
                    {/* Teks Navigasi Bawah Input */}
                    <div className="flex items-center text-[10px] md:text-[14px] px-1 mt-1">
                        <span className="text-white/60 whitespace-nowrap">
                            Sudah punya akun?{' '}
                            <Link to="/" className="text-white font-bold hover:underline ml-1">
                                Masuk
                            </Link>
                        </span>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] md:gap-[16px] mt-2">
                    <Button type="submit">Daftar</Button>
                    <Button variant="outline" icon={googleIcon}>Daftar dengan Google</Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default RegisterPage;