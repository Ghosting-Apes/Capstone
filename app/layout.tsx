import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
import { createTheme, MantineProvider } from "@mantine/core";
import Image from "next/image";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <div className="w-full min-w-[1200px] size-min-750 h-full flex p-5 border-2">
            <div className="pl-7 pt-16 justify-center w-1/4">
              <Image alt="The Encyclopedia of World Medical History" src="/encycl-logo.png" width={400} height={100} />
            </div>
            <div className="flex flex-col justify-center w-3/4 pl-[5%]">
              <h1 className="font-bold text-5xl pb-7">The Encyclopedia of </h1>
              <h1 className="font-bold text-6xl pb-7">World Medical History</h1>
            </div>
          </div>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
