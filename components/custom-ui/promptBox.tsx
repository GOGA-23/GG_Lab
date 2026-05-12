"use client";

import { useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PromptBox({
    prompt,
    setPrompt,
}: {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const MAX_HEIGHT = 150;

    const autoResize = () => {
        const textarea = textareaRef.current;

        if (!textarea) return;

        // reset height
        textarea.style.height = "auto";

        const newHeight = Math.min(textarea.scrollHeight, MAX_HEIGHT);

        textarea.style.height = `${newHeight}px`;

        // enable internal scroll
        textarea.style.overflowY =
            textarea.scrollHeight > MAX_HEIGHT ? "auto" : "hidden";
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPrompt(e.target.value);
        autoResize();
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (!prompt.trim()) return;
        setPrompt("");
    };

    return (
        <div className="w-full max-w-5xl mx-auto">
            <div
                className="rounded-[32px] border border-zinc-800 bg-card p-5 shadow-xl
      "
            >
                <Textarea
                    ref={textareaRef}
                    value={prompt}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe what you want to create..."
                    className="min-h-32 md:min-h-37.5 resize-none border-none bg-transparent text-white placeholder:text-zinc-500 text-lg focus-visible:ring-0 shadow-none overflow-y-hidden no_scrollbar"
                />

                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-zinc-500">Press Enter to submit</div>

                    <Button
                        onClick={handleSubmit}
                        size="icon"
                        className="rounded-full bg-background hover:bg-background/70 hover:scale-105 transition-transform duration-300"
                    >
                        <div
                            className={
                                "block size-4 md:size-5 cursor-pointer relative overflow-hidden"
                            }
                        >
                            <Image
                                priority
                                alt="send Icon"
                                fill
                                src={"/send.svg"}
                                className={"object-cover object-center"}
                            />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    );
}
