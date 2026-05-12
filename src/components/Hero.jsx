import { useState, useRef } from "react";
// Import "Kamar" UI Store kita
import { useUIStore } from '../store/useUIStore';

import playIcon from "../assets/logo/play-circle.png";
import infoIcon from "../assets/logo/information-outline.png";
import muteIcon from "../assets/logo/mute.png"; 
import volumeIcon from "../assets/logo/volume.png";

const Hero = () => {
    const { isMuted, toggleGlobalMute } = useUIStore();
    const [isPlaying, setIsPlaying] = useState(true);
    const [isReady, setIsReady] = useState(false);
    const playerRef = useRef(null);
    const sendCommand = (command) => {
        if (!isReady || !playerRef.current) return;
        playerRef.current.contentWindow.postMessage(
            JSON.stringify({
                event: 'command',
                func: command,
                args: []
            }),
            '*'
        );
    };
    const toggleMute = () => {
        const command = isMuted ? 'unMute' : 'mute';
        sendCommand(command);
        toggleGlobalMute(); 
    };

    const togglePlay = () => {
        const command = isPlaying ? 'pauseVideo' : 'playVideo';
        sendCommand(command);
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden bg-[#181818]">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/50 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <iframe
                    ref={playerRef}
                    className="absolute top-1/2 left-1/2 w-[300vw] h-[300vh] md:w-[150vw] md:h-[150vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-80"
                    src={`https://www.youtube.com/embed/U0MOoyI7pIM?autoplay=1&controls=0&showinfo=0&autohide=0&loop=1&playlist=U0MOoyI7pIM&mute=1&enablejsapi=1`}
                    title="Movie Trailer"
                    allow="autoplay; encrypted-media"
                    onLoad={() => setIsReady(true)}
                ></iframe>
            </div>
            {/* Content Overlay */}
            <div className="absolute bottom-[20%] left-[20px] md:left-[80px] z-20 w-[90%] md:w-[50%] flex flex-col gap-3 md:gap-5">
                <h1 className="text-white text-[32px] md:text-[56px] font-bold leading-tight drop-shadow-lg">
                    Duty After School
                </h1>
                <p className="text-white/80 text-[14px] md:text-[18px] font-medium max-w-[500px] leading-relaxed drop-shadow-md">
                    Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                </p>
                {/* Tombol Aksi */}
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
                    <button
                        onClick={togglePlay}
                        className="bg-[#2F80ED] hover:bg-[#2F80ED]/80 text-white px-6 py-1.5 md:px-8 md:py-2 rounded-full flex items-center gap-2 transition duration-300 shadow-[0_0_15px_rgba(47,128,237,0.4)] font-bold text-[14px] md:text-base whitespace-nowrap"
                    >
                        <img src={playIcon} alt="Play" className="w-4 h-4 md:w-5 md:h-5" />
                        {isPlaying ? "Pause" : "Mulai"}
                    </button>
                    <button className="bg-[#2F3334]/80 hover:bg-[#2F3334] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full flex items-center gap-2 transition duration-300 font-semibold backdrop-blur-sm text-[14px] md:text-base whitespace-nowrap">
                        <img src={infoIcon} alt="Info" className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert" />
                        Selengkapnya
                    </button>
                    <div className="flex items-center gap-2 md:gap-3">
                        <span className="border border-white/40 text-white flex items-center justify-center w-[35px] h-[35px] md:w-[40px] md:h-[40px] rounded-full text-[12px] md:text-[14px] font-bold">
                            18+
                        </span>
                        <button
                            onClick={toggleMute}
                            className="transition transform active:scale-90"
                        >
                            <img
                                src={isMuted ? muteIcon : volumeIcon}
                                alt="Mute Toggle"
                                className="w-[35px] md:w-[40px] h-auto"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;