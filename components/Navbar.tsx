"use client";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import MenuIcon from "./Svgs/MenuIcon";
import { Show, UserButton } from "@clerk/nextjs";
import { CustomBtn } from "./custom-ui/CustomBtn";

const Navbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
    return (
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-2">
            <div className="text-muted-foreground flex flex-1 items-center gap-8 font-medium justify-between lg:gap-16">
                <div
                    className={
                        "block w-24 h-14 md:w-34 md:h-18 cursor-pointer relative overflow-hidden"
                    }
                >
                    <Image
                        priority
                        alt="GG Lab logo"
                        fill
                        src={"/GG-logo.svg"}
                        className={"object-cover object-center"}
                    />
                </div>
                <header className="md:flex justify-end items-center hidden">
                    {isAuthenticated ? (
                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                    ) : (
                        <CustomBtn />
                    )}
                </header>
            </div>

            <div className="flex items-center gap-6">
                {isAuthenticated ? (
                    <div className="block md:hidden">
                        <Show when="signed-in">
                            <UserButton />
                        </Show>
                    </div>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="md:hidden" asChild>
                            <Button variant="outline" size="icon">
                                <MenuIcon />
                                <span className="sr-only">Menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end">
                            <DropdownMenuGroup>
                                <CustomBtn />
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
