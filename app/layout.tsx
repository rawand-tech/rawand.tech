import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
    subsets: ["latin"],
    weight: ["500", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Rawand.Tech",
    description: "I am a 19-year-old web developer in DE🇩🇪 that builds AI Products.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" dir="ltr">
            <body className={`${inter.className} antialiased text-2xl font-medium tracking-tight text-zinc-500 bg-zinc-100`}>
                {children}
                <Script src="https://cloud.umami.is/script.js" data-website-id="ac902327-521e-4412-99ac-2ff5cce71237" defer></Script>
            </body>
        </html>
    );
}
