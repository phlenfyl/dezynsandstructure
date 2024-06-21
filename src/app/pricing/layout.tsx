import Header from "@/components/shop/Header";
import { Metadata } from "next";
import Bottom from "@/components/main/Bottom";
import SessionProvider from "@/components/sessionprovider/SessionProvider";
import { Session } from "next-auth";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Shop for all architectural designs",
};

interface ShopProps {
  children: React.ReactNode;
  session: Session | null
}

export default function Layout({children, session}: ShopProps) {
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}> 
          <Header/>
          {children}
          <Bottom/>
        </SessionProvider> 
      </body>
    </html>
  );
}