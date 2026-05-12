import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo/Logo.png';
import avatar from '../assets/logo/avatar.png';
import accountIcon from '../assets/logo/account.png';
import starIcon from '../assets/logo/star.png';
import logoutIcon from '../assets/logo/arrow_out.png';
import { useAuthStore } from '../store/useAuthStore';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const { currentUser, logoutZustand } = useAuthStore();
    const handleLogout = () => {
        logoutZustand();
        navigate('/login', { replace: true });
    };
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#181818]/80 backdrop-blur-md px-[16px] md:px-[80px] py-4 flex justify-between items-center transition-all">
            <div className="flex items-center gap-[12px] md:gap-[40px]">
                <Link to="/home">
                    <img src={logo} alt="Chill" className="h-[20px] md:h-[40px] w-auto" />
                </Link>                
                <div className="flex items-center gap-[10px] md:gap-[30px] text-white font-semibold opacity-80 text-[10px] md:text-base">
                    <Link to="#" className="hover:opacity-100 transition">Series</Link>
                    <Link to="#" className="hover:opacity-100 transition">Film</Link>
                    <Link to="#" className="hover:opacity-100 transition">Daftar Saya</Link>
                </div>
            </div>
            <div className="relative" ref={dropdownRef}>
                <div onClick={() => setOpen(!open)} className="flex items-center gap-2 cursor-pointer group">
                    <img src={avatar} alt="Avatar" className="w-[28px] md:w-[40px] h-[28px] md:h-[40px] rounded-full border-2 border-transparent group-hover:border-[#2F80ED] transition-all" />
                    <span className="text-white hidden md:block text-[14px] font-bold">
                        {currentUser || 'User'}
                    </span>
                </div>
                {open && (
                    <div className="absolute right-0 mt-3 w-[160px] md:w-[200px] bg-[#181A1C] border border-white/10 rounded-[8px] py-2 shadow-2xl">
                        <Link to="#" className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item">
                            <img src={accountIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                            <span className="text-[14px] group-hover/item:text-[#2F80ED]">Profil Saya</span>
                        </Link>
                        <Link to="#" className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item">
                            <img src={starIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                            <span className="text-[14px] group-hover/item:text-[#2F80ED]">Ubah Premium</span>
                        </Link>
                        <hr className="border-white/10 mx-4 my-1" />
                        <button onClick={handleLogout} className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item w-full text-left">
                            <img src={logoutIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                            <span className="text-[14px] group-hover/item:text-red-500 font-bold">Keluar</span>
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;