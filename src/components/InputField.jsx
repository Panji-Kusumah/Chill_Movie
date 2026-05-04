const InputField = ({ label, type = "text", placeholder, icon, value, onChange, ...props }) => {
    return (
        <div className="flex flex-col gap-[8px] text-left w-full font-lato">
            <label className="text-[16px] text-white opacity-80 ml-2">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full h-[48px] px-6 rounded-[50px] border border-chill-border bg-chill-dark text-white outline-none focus:border-white/50 transition duration-300 placeholder:opacity-40"
                    {...props}
                    required
                />
                {icon && (
                    <img
                        src={icon}
                        alt="toggle"
                        className="absolute right-5 top-1/2 -translate-y-1/2 w-[18px] opacity-60 cursor-pointer"
                    />
                )}
            </div>
        </div>
    );
};

export default InputField;