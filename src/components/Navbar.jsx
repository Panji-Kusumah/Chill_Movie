import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import logo from '../assets/logo/Logo.png';
import avatar from '../assets/logo/avatar.png';
import accountIcon from '../assets/logo/account.png';
import starIcon from '../assets/logo/star.png';
import logoutIcon from '../assets/logo/arrow_out.png';

import { logout } from '../utilities/auth';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        logout();
        navigate('/login', { replace: true });
    };

    // klik luar  nutup dropdown
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
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#181818]/80 backdrop-blur-md px-[20px] md:px-[80px] py-4 flex justify-between items-center transition-all">
            
            {/* KIRI */}
            <div className="flex items-center gap-[15px] md:gap-[40px]">
                <Link to="/">
                    <img src={logo} alt="Chill Logo" className="h-[18px] md:h-[28px]" />
                </Link>
                <div className="flex items-center gap-[12px] md:gap-[32px] text-white/80 text-[12px] md:text-[16px]">
                    <Link to="#" className="hover:text-white transition">Series</Link>
                    <Link to="#" className="hover:text-white transition">Film</Link>
                    <Link to="#" className="hover:text-white transition">Daftar Saya</Link>
                </div>
            </div>

            {/* KANAN */}
            <div 
                ref={dropdownRef}
                className="flex items-center gap-2 cursor-pointer relative"
                onClick={() => setOpen(!open)}
            >
                {/* Avatar */}
                <div className="w-[34px] h-[34px] md:w-[40px] md:h-[40px] rounded-full overflow-hidden border border-white/10">
                    <img src={avatar} alt="User Avatar" className="w-full h-full object-cover" />
                </div>

                {/* Arrow */}
                <svg 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>

                {/* DROPDOWN */}
                <div className={`absolute right-0 top-full mt-2 w-[139px] md:w-[160px] bg-[#181818] border border-white/10 rounded-[4px] transition-all duration-300 shadow-xl overflow-hidden py-2 
                    ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
                `}>

                    <Link to="#" className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item">
                        <img src={accountIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                        <span className="text-[14px] group-hover/item:text-[#2F80ED]">Profil Saya</span>
                    </Link>

                    <Link to="#" className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item">
                        <img src={starIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                        <span className="text-[14px] group-hover/item:text-[#2F80ED]">Ubah Premium</span>
                    </Link>

                    <hr className="border-white/10 mx-4 my-1" />

                    {/* LOGOUT FIX */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-[12px] px-4 py-2 md:py-3 text-white transition-colors group/item w-full text-left"
                    >
                        <img src={logoutIcon} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100" />
                        <span className="text-[14px] group-hover/item:text-[#2F80ED]">Keluar</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;