import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Yetion",
  description: "이예인의 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
