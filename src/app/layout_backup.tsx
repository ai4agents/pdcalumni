import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Priyadarshini Colleges Alumni Network | Priyadarshini Degree & PG Colleges",
  description: "The official alumni networking platform for Priyadarshini Degree and PG Colleges, Khammam & Kothagudem. Connect, celebrate, and grow with the community.",
  keywords: "Priyadarshini Colleges, Alumni, Priyadarshini College, Khammam, Kothagudem, Silver Jubilee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-zinc-300 font-sans antialiased min-h-screen flex flex-col selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
