import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";
import Image from "next/image";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Capstone",
  description: "a legendary wiki clone",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased border-2 h-full`}
      >
        <MantineProvider theme={theme}>
          <div className="w-full min-w-[1200px] size-min-750 flex p-5">
            <div className="flex flex-col border-2 w-full text-center justify-center pl-[5%]">
              <h1 className="font-bold text-5xl pt-10 pb-10">The Encyclopedia of World Medical History</h1>
              <NavBar />
            </div>
          </div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
 