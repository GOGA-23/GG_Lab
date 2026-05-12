type RAIconProps = {
    className?: string;
};

const RAIcon = ({
    className = "",
}: RAIconProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#06B6D4"
            version="1.1"
            id="Layer_1"
            viewBox="3 5 18 14"
            className={className}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
                id="SVGRepo_tracerCarrier"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
                {" "}
                <polygon points="12,7 13,7 13,9 15,9 15,11 3,11 3,13 15,13 15,15 13,15 13,17 12,17 12,19 15,19 15,17 17,17 17,15 19,15 19,14 20,14 20,13 21,13 21,11 20,11 20,10 19,10 19,9 17,9 17,7 15,7 15,5 12,5 " />{" "}
            </g>
        </svg>
    );
};

export default RAIcon;
