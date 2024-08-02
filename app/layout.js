import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Community Project",
  description: "Community Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-secondary h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
