type MenuIconProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
};

const MenuIcon = ({
    size = 24,
    color = "#06B6D4",
    strokeWidth = 2,
    className = "",
}: MenuIconProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M5 17H19M5 12H19M5 7H19"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default MenuIcon;