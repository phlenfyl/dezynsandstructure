import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/sessionprovider/SessionProvider";
import { Loading } from "@/components/utils/Loading";
import { CartProvider } from "../context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dezyns Structure LTD",
  description: "We listen and execute",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="logo.jpg" type="image/x-icon" className="rounded-full w-20 h-20" />
      </head>
          <body>
            <SessionProvider> 
              <CartProvider>
                  <Loading>
                    {children}
                  </Loading>
              </CartProvider>
            </SessionProvider> 

          </body>
      </html>
  );
}
