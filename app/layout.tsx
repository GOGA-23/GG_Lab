import type { Metadata } from "next";
import { Geist_Mono, IBM_Plex_Sans, Public_Sans } from "next/font/google";
import { ClerkProvider, Show, UserButton } from '@clerk/nextjs'
import "./globals.css";
import { cn } from "@/lib/utils";
import { CustomBtn } from "@/components/custom-ui/CustomBtn";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { on } from "events";
import { onBoardUser } from "@/lib/auth/actions";
// import { SignOutButton } from "@/components/custom-ui/sign-out-button";


const publicSansHeading = Public_Sans({ subsets: ['latin'], variable: '--font-heading' });

const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-sans' });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GG Lab",
  description: "GG Lab is a platform that allows you to create and share your own AI prompts. Whether you're a developer, designer, or just someone with a great idea, GG Lab provides the tools you need to bring your AI concepts to life.",
  icons: {
    icon: "/GG-logo.svg",
  },
  alternates: {
    // canonical: `https://fluorokraft.vercel.app/`,
  },
  // metadataBase: new URL("https://fluorokraft.vercel.app/"),
  openGraph: {
    title: "GG Lab",
    description: "GG Lab is a platform that allows you to create and share your own AI prompts. Whether you're a developer, designer, or just someone with a great idea, GG Lab provides the tools you need to bring your AI concepts to life.",
    // url: "https://fluorokraft.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  await onBoardUser();
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistMono.variable, "font-sans", ibmPlexSans.variable, publicSansHeading.variable)}
    >
      <body className="min-h-screen flex flex-col bg-black text-white z-0 bg-auto bg-top bg-no-repeat" style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
