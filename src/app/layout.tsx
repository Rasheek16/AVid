import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const menrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVid",
  description: "Shared AI powered videos with your friends. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${menrope.className} bg-[#171717] antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
