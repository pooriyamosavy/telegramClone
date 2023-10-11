'use client'

import { ThemeProvider } from "@emotion/react";
import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import theme from "@/style/theme";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </body>
        </html>
    );
}
