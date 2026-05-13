import { useState, useEffect, useRef } from 'react';
import MovieCard from './MovieCard';
import arrowLeft from '../assets/logo/arrow-left.png';
import arrowRight from '../assets/logo/arrow-right.png';

const MovieRow = ({ title, variant = 'portrait', fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const sliderRef = useRef(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchUrl);
                const data = await response.json();
                setMovies(data.results || []);
            } catch (error) {
                console.error("Error fetching TMDB data:", error);
            }
        };
        if (fetchUrl) {
            fetchData();
        }
    }, [fetchUrl]);

    // Test fungsi scroll kiri-kanan nanti bisa diimprovisasi lagi biar lebih smooth di HP
    const scroll = (direction) => {
        if (sliderRef.current) {
            const { current } = sliderRef;
            const scrollAmount = window.innerWidth < 768
                ? (direction === 'left' ? -300 : 300)
                : (direction === 'left' ? -1000 : 1000);
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative w-full py-[30px] md:py-[40px] px-[20px] md:px-[80px] group/row">
            <h2 className="text-white text-[18px] md:text-[24px] font-bold mb-[20px] md:mb-[32px]">
                {title}
            </h2>
            {/* Slider kiri - kanan */}
            <div className="relative">
                {/* TOMBOL KIRI */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-[-5px] md:left-[-50px] top-1/2 -translate-y-1/2 z-40 opacity-100 md:opacity-0 group-hover/row:opacity-100 transition-all duration-300"
                >
                    <div className="bg-black/80 p-2 md:p-3 rounded-full hover:bg-black border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform hover:scale-110">
                        <img src={arrowLeft} alt="Prev" className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] brightness-0 invert" />
                    </div>
                </button>
                <div
                    ref={sliderRef}
                    className={`flex overflow-x-auto scroll-smooth 
                    ${variant === 'continue' ? 'gap-[16px] md:gap-[24px]' : 'gap-[10px]'}`}
                    style={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch' // Memastikan geser jari di HP super mulus coba improvisasi performa scroll di HP
                    }}
                >
                    <style>{`div::-webkit-scrollbar { display: none; }`}</style>
                    {movies.map((movie, index) => {
                        if (!movie.poster_path && !movie.backdrop_path) return null;
                        const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
                        const imagePath = variant === 'continue' ? movie.backdrop_path : movie.poster_path;
                        const imageUrl = imagePath ? `${imgBaseUrl}${imagePath}` : '';
                        const safeProgress = variant === 'continue' ? ((index % 8) * 10 + 20) : null;
                        return (
                            <MovieCard
                                key={index}
                                variant={variant}
                                image={imageUrl}
                                title={movie.title || movie.name}
                                progress={safeProgress}
                                rating={movie.vote_average}
                            />
                        );
                    })}
                </div>
                {/* TOMBOL KANAN */}
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-[-5px] md:right-[-50px] top-1/2 -translate-y-1/2 z-40 opacity-100 md:opacity-0 group-hover/row:opacity-100 transition-all duration-300"
                >
                    <div className="bg-black/80 p-2 md:p-3 rounded-full hover:bg-black border border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-transform hover:scale-110">
                        <img src={arrowRight} alt="Next" className="w-[16px] h-[16px] md:w-[24px] md:h-[24px] brightness-0 invert" />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default MovieRow;