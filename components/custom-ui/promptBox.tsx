"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef } from "react";

const userSchema = z.object({
    description: z
        .string()
        .min(5, "Description must be at least 5 characters"),
});

type UserInput = z.infer<typeof userSchema>;

export default function PromptBox({
    prompt,
    setPrompt,
}: {
    prompt: string;
    setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) {

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<UserInput>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            description: prompt || "",
        },
    });

    useEffect(() => {
        if (prompt) {
            setValue("description", prompt);
        }
    }, [prompt, setValue]);

    const onSubmit = async (data: UserInput) => {
        console.log("Submitted:", data);
        setPrompt(data.description);

        // reset form
        reset();
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto ">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-[32px] border border-zinc-800 bg-card p-5 shadow-xl
">
                <Textarea
                    {...register("description", {
                        onChange: (e) => setPrompt(e.target.value),
                        required: "Description is required",
                    })}
                    // value={prompt}
                    onKeyDown={handleKeyDown}
                    placeholder="Describe what you want to create..."
                    className="min-h-32 md:min-h-37.5 resize-none border-none bg-transparent text-white placeholder:text-zinc-500 text-lg focus-visible:ring-0 shadow-none no_scrollbar max-h-35 overflow-y-auto"

                />
                <span className="text-red-700 font-sans text-sm tracking-wider opacity-90">{errors.description && errors.description?.message}</span>
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-zinc-500">Press Enter to submit</div>
                    <Button
                        type="submit"
                        role="button"
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
            </form>
        </div>
    );
}
