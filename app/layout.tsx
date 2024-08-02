import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import styles from "./page.module.css";
import NavBarMenu from "./Components/NavBarMenu/NavBarMenu";
import Header from "./Components/Header/Header";
import BurgerMenu from "./Components/BurgerMenu/BurgerMenu";
import MobileNavBar from "./Components/NavBarMobile/NavBarMobile";
import RecoilWrapper from "./Components/RecoilWrapper/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body >
      <RecoilWrapper>
        {children}
      </RecoilWrapper>
    </body>
    </html >
  )
};
