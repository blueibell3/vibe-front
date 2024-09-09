import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilWrapper from "./Components/RecoilWrapper/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "vibetunes",
  description: "musicapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${inter.className}`}>
        <RecoilWrapper>
          {children}
        </RecoilWrapper>
      </body>
    </html >
  )
};
