import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import { Suspense } from "react";

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
        <Suspense fallback={<h1>Loading...</h1>}>{children}</Suspense>
      </body>
    </html>
  );
}
