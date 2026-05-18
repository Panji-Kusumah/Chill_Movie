import useWatchlistStore from '../store/useWatchlistStore';
import MovieCard from '../components/MovieCard';
import Navbar from '../components/Navbar';

const DaftarSaya = () => {

    const { watchlist } = useWatchlistStore();
    return (
        <div className="min-h-screen bg-gradient-to-b from-black via-[#111111] to-[#181818] text-white overflow-hidden">
            <Navbar />
            <main className="relative px-4 md:px-10 pt-28 pb-20">
                <div className="relative mb-12 md:mb-16">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent blur-3xl opacity-30 rounded-full"></div>
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                            My List
                        </h1>
                        <p className="text-zinc-400 mt-4 max-w-2xl text-sm md:text-base leading-relaxed">
                            Film & Series yang kamu simpan untuk ditonton nanti.
                        </p>
                        {watchlist.length > 0 && (
                            <div className="flex items-center gap-2 mt-6">
                                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                <span className="text-sm text-zinc-400 font-medium">
                                    {watchlist.length} Tersimpan
                                </span>
                            </div>
                        )}
                    </div>
                </div>
                {/* state kosong */}
                {watchlist.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[55vh] text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                            Daftar Kamu Masih Kosong
                        </h2>
                        <p className="text-zinc-500 max-w-md leading-relaxed text-sm md:text-base">
                            Simpan film kesukaan kamu dan tonton nanti.
                        </p>
                        <button
                            onClick={() => window.location.href = '/'}
                            className="mt-8 px-8 py-3 bg-blue-400 text-black font-bold rounded-md hover:bg-blue-600 transition-all duration-300 hover:scale-125"
                        >
                            Cari Film
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-8 gap-x-4">
                            {watchlist.map((movie) => (
                                <div
                                    key={movie.id}
                                    className="relative flex justify-center"
                                >
                                    <MovieCard
                                        id={movie.id}
                                        title={movie.title}
                                        image={movie.image}
                                        rating={movie.rating}
                                        genres={movie.genres}
                                        variant={movie.variant || 'portrait'}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default DaftarSaya;