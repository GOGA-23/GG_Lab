"use client";

import { Button } from "../ui/button";

export const CustomBtn = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button
        variant="outline"
        size="lg"
        className=" bg-none text-white"
        onClick={() => (window.location.href = "/sign-in")}
      >
        Sign In
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="bg-linear-to-r from-[#06B6D4] to-[#34D399] text-white"
        onClick={() => (window.location.href = "/sign-up")}
      >
        Sign Up
      </Button>
    </div>

  );
};
