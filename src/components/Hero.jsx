import { useState, useRef } from "react";
import playIcon from "../assets/logo/play-circle.png";
import infoIcon from "../assets/logo/information-outline.png";
import muteIcon from "../assets/logo/mute.png";
import volumeIcon from "../assets/logo/volume.png";

const Hero = () => {
    const [isMuted, setIsMuted] = useState(true);
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
        setIsMuted(!isMuted);
    };

    const togglePlay = () => {
        const command = isPlaying ? 'pauseVideo' : 'playVideo';
        sendCommand(command);
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="relative h-[60vh] md:h-[95vh] w-full overflow-hidden bg-[#181818]">
            {/* Settingan vidio yt */}
            <div className="absolute inset-0 pointer-events-none scale-[1.5] md:scale-[1.1]">
                <iframe
                    ref={playerRef}
                    onLoad={() => setIsReady(true)}
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/U0MOoyI7pIM?enablejsapi=1&origin=http://localhost:5173&autoplay=1&mute=1&controls=0&loop=1&playlist=U0MOoyI7pIM&rel=0"
                    allow="autoplay; encrypted-media"
                ></iframe>
            </div>

            {/* Overlay Gradients dan Main Content Container agar konten utama terlihat lebih jelas */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/70 via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center px-[20px] md:px-[80px] mt-[50px] items-start">
                <h1 className="text-white text-[32px] md:text-[50px] font-bold mb-4 drop-shadow-lg text-left">
                    Duty After School
                </h1>
                <p className="text-white text-[14px] md:text-[18px] max-w-[714px] mb-8 leading-relaxed drop-shadow-md opacity-90 text-left">
                    Sebuah benda tak dikenal mengambil alih dunia.<br/>
                    Dalam keputusasaan, Departemen Pertahanan <br/>
                    mulai merekrut lebih banyak tentara,termasuk <br/>
                    siswa sekolah menengah menjadi pejuang garis <br/>
                    depan.
                </p>
                {/* Action Bar  */}
                <div className="flex items-center gap-2 md:gap-[20px] flex-wrap md:flex-nowrap">
                    <button
                        onClick={togglePlay}
                        className="bg-chill-button hover:opacity-80 text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full flex items-center gap-2 transition duration-300 font-semibold text-[14px] md:text-base whitespace-nowrap"
                    >
                        <img src={playIcon} alt="Play" className="w-4 h-4 md:w-5 md:h-5" />
                        {isPlaying ? "Pause" : "Mulai"}
                    </button>
                    <button className="bg-[#2F3334]/80 hover:bg-[#2F3334] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full flex items-center gap-2 transition duration-300 font-semibold backdrop-blur-sm text-[14px] md:text-base whitespace-nowrap">
                        <img src={infoIcon} alt="Info" className="w-4 h-4 md:w-5 md:h-5 brightness-0 invert" />
                        Selengkapnya
                    </button>
                    <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-0">
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