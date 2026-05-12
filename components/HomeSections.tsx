"use client";
import { buildPrompt } from "@/lib/data";
import PromptBox from "./custom-ui/promptBox";
import { useState } from "react";
import { CustomCard, Jumbotron } from "./custom-ui/CustomCard";

type HomeSectionsProps = {
    user: {
        id: string;
        firstName: string | null;
        lastName: string | null;
        imageUrl: string;
        email?: string;
    } | null;

    isAuthenticated: boolean;
};

const HomeSections = ({ user, isAuthenticated }: HomeSectionsProps) => {
    const [prompt, setPrompt] = useState("");

    const jumbotronUser = user
        ? { id: user.id, firstName: user.firstName ?? "" }
        : { id: "", firstName: "" };

    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center max-w-6xl mx-auto py-10 relative min-h-screen overflow-hidden">
            <Jumbotron user={jumbotronUser} isAuthenticated={isAuthenticated} />
            <div className="max-w-4xl flex flex-wrap justify-center md:items-center gap-3 md:gap-5 mt-2.5 md:mt-5">
                {buildPrompt.map((item) => (
                    <CustomCard
                        key={item.id}
                        src={item.icon}
                        alt={item.alt}
                        title={item.title}
                        prompt={item.prompt}
                        setPrompt={setPrompt}
                    />
                ))}
            </div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-120 lg:w-4xl h-0.5 my-8 bg-muted-foreground border-0" />
                <span className="absolute px-3 py-2 tracking-widest font-medium text-zinc-300 -translate-x-1/2 bg-foreground/90 rounded-md left-1/2 uppercase text-sm md:text-md">
                    Or Describe your own idea
                </span>
            </div>
            <div className="sticky bottom-0 p-4 w-full">
                <PromptBox prompt={prompt} setPrompt={setPrompt} />
            </div>
        </div>
    );
};

export default HomeSections;
