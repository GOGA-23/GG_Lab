"use client"
import Image from 'next/image';
import RAIcon from '../Svgs/RAIcon';

type ProjectCardProps = {
    src: string;
    alt: string;
    title: string;
    Date: string;
};

export const ProjectCard = ({
    src,
    alt,
    title,
    Date,
}: ProjectCardProps) => {
    return (
        <div
            className="md:block w-full md:min-w-56 md:max-w-64 p-3 md:p-4 border-[0.5px] border-[#34D399] bg-card text-card-foreground cursor-pointer rounded-lg space-y-2 hover:scale-105 transition-transform duration-200 group"
            onClick={() => {
                console.log("clicked");

            }}
        >
            <div className='flex justify-between items-center font-sans'>
                <div
                    className={
                        "w-16 h-11 md:w-12 md:h-12 relative overflow-hidden rounded-md"
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
                <RAIcon className='size-4 group-hover:animate-ping duration-500 ' />
            </div>
            <h3 className="text-md md:text-lg text-left">{title}</h3>
            <p className="text-xs text-muted-foreground">{Date}</p>
        </div>
    );
};
