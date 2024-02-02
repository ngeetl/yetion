import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yetion",
  description: "이예인의 포트폴리오",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <h1>레이아웃</h1>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
