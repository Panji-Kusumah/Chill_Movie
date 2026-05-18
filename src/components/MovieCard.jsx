import useWatchlistStore from '../store/useWatchlistStore';

import {
    FaPlay,
    FaCheck,
    FaPlus,
    FaChevronDown,
    FaStar
} from 'react-icons/fa';

const MovieCard = ({
    id,
    variant = 'portrait',
    image,
    title,
    progress,
    rating,
    genres = []
}) => {

    const {
        watchlist,
        addToWatchlist,
        removeFromWatchlist
    } = useWatchlistStore();
    const isSaved = watchlist.some(
        (item) => item.id === id
    );
    const formattedRating = rating
        ? rating.toFixed(1)
        : "N/A";
    // CRUD
    const handleMyList = (e) => {
        e.stopPropagation();
        if (isSaved) {
            removeFromWatchlist(id);
        } else {
            addToWatchlist({
                id,
                image,
                title,
                rating,
                genres,
                variant
            });
        }
    };
    if (variant === 'continue') {
        return (
            <div className="relative flex-shrink-0 w-[240px] md:w-[302px] h-[130px] md:h-[162px] rounded-md overflow-hidden cursor-pointer group transition-all duration-500 ease-out hover:scale-[1.15] hover:-translate-y-6 hover:z-[999] hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/30 to-transparent opacity-90"></div>
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-2">
                    <h3 className="text-white text-[14px] md:text-[16px] font-bold truncate drop-shadow-md">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1">
                        <FaStar
                            size={11}
                            className="text-yellow-400"
                        />
                        <span className="text-white/80 text-[12px] font-semibold">
                            {formattedRating}
                        </span>
                    </div>
                    <div className="flex items-center justify-between mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center gap-2">
                            <button className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform">
                                <FaPlay size={9} />
                            </button>
                            <div className="relative group/tooltip">
                                <button
                                    onClick={handleMyList}
                                    className="w-7 h-7 rounded-full border border-white/60 bg-black/40 flex items-center justify-center hover:scale-110 transition-transform"
                                >
                                    {isSaved
                                        ? (
                                            <FaCheck
                                                size={8}
                                                className="text-green-400"
                                            />
                                        )
                                        : (
                                            <FaPlus
                                                size={8}
                                                className="text-white"
                                            />
                                        )
                                    }
                                </button>
                                <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 backdrop-blur-md text-white text-[8px] font-medium px-1.5 py-[2px] rounded opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-150 z-[9999] leading-none">
                                    {isSaved
                                        ? 'Hapus dari Daftar Saya'
                                        : 'Tambahkan ke Daftar Saya'
                                    }
                                </div>
                            </div>
                        </div>
                        <button className="w-7 h-7 rounded-full border border-white/60 bg-black/40 flex items-center justify-center text-white hover:scale-110 transition-transform">
                            <FaChevronDown size={8} />
                        </button>
                    </div>
                    {genres.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                            {genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className="text-[10px] text-white/80 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm"
                                >
                                    {genre}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                {progress && (
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#222222] z-40">
                        <div
                            className="h-full bg-[#2F80ED]"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className="relative flex-shrink-0 w-[140px] md:w-[234px] h-[210px] md:h-[365px] rounded-md overflow-hidden cursor-pointer group transition-all duration-500 ease-out hover:scale-[1.35] hover:-translate-y-10 hover:z-[999] hover:shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-10">
                <h3 className="text-white text-[14px] md:text-[18px] font-bold leading-tight drop-shadow-md mb-2 line-clamp-2">
                    {title}
                </h3>
                <div className="flex items-center gap-1.5">
                    <FaStar
                        size={13}
                        className="text-yellow-400"
                    />
                    <span className="text-white/90 text-[12px] md:text-[14px] font-bold">
                        {formattedRating}
                    </span>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform">
                            <FaPlay size={10} />
                        </button>
                        <div className="relative group/tooltip">
                            <button
                                onClick={handleMyList}
                                className="w-8 h-8 rounded-full border border-white/60 bg-black/40 flex items-center justify-center hover:scale-110 transition-transform"
                            >
                                {isSaved
                                    ? (
                                        <FaCheck
                                            size={9}
                                            className="text-green-400"
                                        />
                                    )
                                    : (
                                        <FaPlus
                                            size={9}
                                            className="text-white"
                                        />
                                    )
                                }
                            </button>
                            <div className="absolute bottom-[110%] left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/90 backdrop-blur-md text-white text-[8px] font-medium px-1.5 py-[2px] rounded opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-all duration-150 z-[9999] leading-none">
                                {isSaved
                                    ? 'Hapus dari Daftar Saya'
                                    : 'Tambahkan ke Daftar Saya'
                                }
                            </div>
                        </div>
                    </div>
                    <button className="w-8 h-8 rounded-full border border-white/60 bg-black/40 flex items-center justify-center text-white hover:scale-110 transition-transform">
                        <FaChevronDown size={9} />
                    </button>
                </div>
                {genres.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {genres.map((genre, index) => (
                            <span
                                key={index}
                                className="text-[10px] md:text-[11px] text-white/80 bg-white/10 px-2 py-1 rounded-full backdrop-blur-sm"
                            >
                                {genre}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <div className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                HD
            </div>
        </div>
    );
};

export default MovieCard;