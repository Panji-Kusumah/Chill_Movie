
const Button = ({ children, type = "button", variant = "primary", onClick, icon }) => {
    const baseStyle = "w-full h-[48px] rounded-[50px] font-bold transition duration-300 flex justify-center items-center gap-2 font-lato";
    const variants = {
        primary: "bg-chill-button hover:bg-[#3f4445] text-white border border-white/10",
        outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white text-[14px]",
    };
    return (
        <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
            {icon && <img src={icon} alt="icon" className="w-[18px]" />}
            {children}
        </button>
    );
};

export default Button;