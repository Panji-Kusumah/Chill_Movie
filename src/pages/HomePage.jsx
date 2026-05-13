import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import SEO from '../components/SEO';

// ngambil data dari TMDB API biar ga ribet masukin card manual
const API_KEY = import.meta.env.VITE_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Daftar film
const requests = {
    continueWatching: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=id-ID&page=1`,
    topRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=id-ID&page=1`,
    trending: `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=id-ID`,
    newReleases: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=id-ID&page=1`,
};

const HomePage = () => {
    return (
        <div className="w-full bg-[#181818] min-h-screen overflow-x-hidden">
            <SEO title="Beranda" description="Chill adalah platform streaming modern yang menghadirkan ribuan film, acara TV,dan konten orisinal eksklusif. Nikmati pengalaman menonton instan dengan rekomendasi personal yang dirancang khusus untuk Anda." />
            <div className="-mt-[70px] md:-mt-[80px]">
                <Hero />
            </div>
            <div className="flex flex-col relative z-20 -mt-[30px] md:-mt-[100px] gap-8 pb-20">
                <MovieRow title="Melanjutkan Tonton Film" variant="continue" fetchUrl={requests.continueWatching} />
                <MovieRow title="Top Rating Film dan Series Hari ini" variant="portrait" fetchUrl={requests.topRated} />
                <MovieRow title="Film Trending" variant="portrait" fetchUrl={requests.trending} />
                <MovieRow title="Rilis Baru" variant="portrait" fetchUrl={requests.newReleases} />
            </div>
        </div>
    );
};

export default HomePage;