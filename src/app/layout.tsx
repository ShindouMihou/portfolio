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
        <meta name="og:title" content="Mihou's Portfolio"/>
        <meta name="og:description"
              content="Hey there, why not check out my portfolio here if you're interested!"/>
        <meta name="theme-color" content="#4de1ff"/>
        <meta name="theme-color" content="#7d23cc"/>
        <meta name="theme-variant" content="dark-knight"/>
        <meta name="og:image" content="https://mihou.dev/mihou-logo.png"/>
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
