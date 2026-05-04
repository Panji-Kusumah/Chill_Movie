import playIcon from '../assets/logo/play-circle.png';
import starIcon from '../assets/logo/star.png'; 

const MovieCard = ({ variant = 'portrait', image, title, progress, rating }) => {
const formattedRating = rating ? rating.toFixed(1) : "N/A";

    if (variant === 'continue') {
        return (
            <div className="relative flex-shrink-0 w-[240px] md:w-[302px] h-[130px] md:h-[162px] rounded-md overflow-hidden cursor-pointer group">
                <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />                
                {/* Gradien gelap permanen di bawah biar judul selalu kebaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80"></div>
                {/* Judul & Rating selalu muncul di bawah kiri */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-col items-start gap-1 w-[80%]">
                    <h3 className="text-white text-[14px] md:text-[16px] font-bold truncate w-full drop-shadow-md">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1">
                        <img src={starIcon} alt="Rating" className="w-[12px] h-[12px]" />
                        <span className="text-white/80 text-[12px] font-semibold">{formattedRating}</span>
                    </div>
                </div>
                {/* Tombol Play muncul di tengah pas di hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                    <img src={playIcon} alt="Play" className="w-[40px] h-[40px] opacity-90 group-hover:scale-110 transition-transform" />
                </div>
                {/* Progress Bar agak transparan dikit */}
                {progress && (
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#222222] z-40">
                        <div className="h-full bg-[#2F80ED]" style={{ width: `${progress}%` }}></div>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="relative flex-shrink-0 w-[140px] md:w-[234px] h-[210px] md:h-[365px] rounded-md overflow-hidden cursor-pointer group">
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />            
            {/* Gradien dari bawah yang muncul pelan-pelan saat di-hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                <h3 className="text-white text-[14px] md:text-[18px] font-bold leading-tight drop-shadow-md mb-1 line-clamp-2">
                    {title}
                </h3>
                <div className="flex items-center gap-1.5">
                    <img src={starIcon} alt="Rating" className="w-[14px] h-[14px]" />
                    <span className="text-white/90 text-[12px] md:text-[14px] font-bold">{formattedRating}</span>
                </div>
            </div>
            {/* hover HD bisa di ganti apa aja nanti*/}
            <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                HD
            </div>
        </div>
    );
};

export default MovieCard;