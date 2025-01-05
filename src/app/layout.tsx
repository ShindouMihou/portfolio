"use client";

import { Space_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import {Provider} from "react-redux";
import {store} from "@/stores/global";

const spaceMono = Space_Mono({
    variable: "--font-space-mono",
    subsets: ["latin"],
    weight: ["700", "400"],
    preload: true
})

const horizons = localFont({
    variable: "--font-horizons",
    src: "./horizon.otf",
    preload: true
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <title>Shindou Mihou</title>
      </head>
      <body
        className={`${spaceMono.variable} ${horizons.variable} antialiased w-full`}
      >
        <Provider store={store}>
            {children}
        </Provider>
      </body>
    </html>
  );
}
