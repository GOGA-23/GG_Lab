"use client";
import Image from "next/image";

type CustomCardProps = {
    src: string;
    alt: string;
    title: string;
    prompt: string;
};

export const CustomCard = ({
    src,
    alt,
    title,
    prompt,
    setPrompt,
}: CustomCardProps & {
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) => {
    return (
        <div
            className="md:block min-w-44 p-3 md:p-4 border-[0.5px] border-[#06B6D4] hover:border hover:border-[#06B6D4] bg-card text-card-foreground cursor-pointer rounded-lg space-y-2 hover:scale-105 transition-transform duration-500 group"
            onClick={() => {
                setPrompt(prompt);
            }}
        >
            <div
                className={
                    "block w-16 h-11 md:w-12 md:h-12 relative overflow-hidden rounded-md group-hover:animate-pulse"
                }
            >
                <Image
                    priority
                    alt={alt}
                    fill
                    src={src}
                    className={"object-cover object-center"}
                />
            </div>
            <h3 className="text-sm md:text-md font-medium text-left">{title}</h3>
        </div>
    );
};

export const Jumbotron = ({
    user,
    isAuthenticated,
}: {
    user: { firstName: string };
    isAuthenticated: boolean;
}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 text-center px-4">
            <div
                className={
                    "block w-24 h-10 md:w-[120px] md:h-[80px] cursor-pointer relative overflow-hidden"
                }
            >
                <Image
                    priority
                    alt="GG Lab logo"
                    fill
                    src={"/gg-mob.svg"}
                    className={"object-cover object-center"}
                />
            </div>
            <h1 className="text-xl md:text-3xl lg:text-4xl font-mono font-semibold text-[#F8FAFC] tracking-wider">
                {isAuthenticated
                    ? `Welcome to GG Lab 🤖 App Builder ${user?.firstName}💖`
                    : "Welcome to GG Lab 🤖 App Builder"}
            </h1>
            <p className="text-md md:text-xl tracking-wide text-[#F8FAFC]/80 font-sans">
                Build amazing 🤖 applications and websites by chatting with AI
            </p>
        </div>
    );
};
