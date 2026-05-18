import logoChill from '../assets/logo/Logo.png';

const Footer = () => {
    const genreList = [
        "Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi", 
        "Sci-fi", "Kejahatan", "Komedi", "Petualangan", "Perang", "Romantis", 
        "Sains & Alam", "Dokumenter", "Misteri", "Horror", "Thriller", "Terlaris"
    ];
    const bantuanList = [
        "FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"
    ];
    return (
        <footer className="w-full bg-[#181818] border-t border-white/10 pt-[60px] pb-[40px] px-[20px] md:px-[80px] mt-[60px] relative z-50">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-start gap-[40px] min-h-[164px]">
                <div className="flex flex-col gap-[16px] w-full md:w-[350px]">
                    <img src={logoChill} alt="Chill Logo" className="w-[120px] md:w-[150px]" />
                    <p className="text-white/60 text-[14px] md:text-[16px] leading-relaxed">
                        Chill adalah platform streaming modern yang menghadirkan ribuan film, acara TV, 
                        dan konten orisinal eksklusif. Nikmati pengalaman menonton instan dengan 
                        rekomendasi personal yang dirancang khusus untuk Anda.
                    </p>
                    <p className="text-white/40 text-[14px] font-medium mt-2">
                        &copy; 2026 Chill All Rights Reserved.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-[40px] md:gap-[100px]">
                    <div className="flex flex-col gap-[16px]">
                        <h4 className="text-white text-[18px] font-bold">Genre</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[30px] md:gap-x-[40px] gap-y-[12px]">
                            {genreList.map((item, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="text-white/60 hover:text-white text-[14px] md:text-[16px] transition-all whitespace-nowrap"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-[16px] min-w-[150px]">
                        <h4 className="text-white text-[18px] font-bold">Bantuan</h4>
                        <div className="flex flex-col gap-[12px]">
                            {bantuanList.map((item, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className="text-white/60 hover:text-white text-[14px] md:text-[16px] transition-all whitespace-nowrap"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </footer>
    );
};
export default Footer;