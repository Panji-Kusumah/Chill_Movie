import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#181818] text-white flex flex-col">
            <Navbar />
            <main className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
                <div className="absolute w-[500px] h-[500px] bg-white/5 blur-3xl rounded-full"></div>
                <h1 className="relative z-10 text-[90px] md:text-[180px] font-black tracking-[12px] text-[#111111] select-none leading-none">
                    404
                </h1>
                <h2 className="relative z-10 -mt-4 md:-mt-8 text-[16px] md:text-[28px] uppercase tracking-[8px] text-zinc-600 font-bold">
                    Not Found
                </h2>
                <p className="relative z-10 mt-6 text-zinc-500 text-sm md:text-base max-w-md leading-relaxed">
                    Maaf Halaman Ini Tidak Tersedia
                </p>
                <Link
                    to="/"
                    className="relative z-10 mt-10 px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-blue-400 transition-all duration-300 hover:scale-105"
                >
                    Kembali ke Menu Utama
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default NotFound;