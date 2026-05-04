import AuthLayout from '../layouts/AuthLayout.jsx';
import InputField from '../components/InputField.jsx';
import Button from '../components/Button.jsx';

import googleIcon from '../assets/logo/google.png';
import eyeOffIcon from '../assets/logo/Vector.png';
import loginBG from '../assets/image/loginBG.jpg';

const LoginPage = () => {
    return (
        <AuthLayout
            title="Masuk"
            subtitle="Selamat Datang Kembali !"
            backgroundImage={loginBG}
        >
            <form className="flex flex-col gap-[20px] md:gap-[24px] w-full">
                <InputField label="Username" placeholder="Masukkan username" />
                <div className="flex flex-col gap-[8px] md:gap-[12px]">
                    <InputField
                        label="Kata Sandi"
                        type="password"
                        placeholder="Masukkan kata sandi"
                        icon={eyeOffIcon}
                    />
                    <div className="flex justify-between items-center text-[10px] md:text-[14px] px-1">
                        <span className="text-white/60 whitespace-nowrap">
                            Belum punya akun? <a href="/register" className="text-white font-bold hover:underline ml-1">Daftar</a>
                        </span>
                        <a href="#" className="text-white/60 hover:text-white transition whitespace-nowrap">
                            Lupa kata sandi?
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px] md:gap-[16px] mt-2">
                    <Button type="submit">Masuk</Button>
                    <Button variant="outline" icon={googleIcon}>Masuk dengan Google</Button>
                </div>
            </form>
        </AuthLayout>
    );
};

export default LoginPage;