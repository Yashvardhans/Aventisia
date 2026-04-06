

const Button = ({ text, className, onClick, type = "button", icon }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex items-center justify-center gap-2 ${className}`}
        >
            {icon && icon}
            <span>{text}</span>
        </button>
    );
};

export default Button;