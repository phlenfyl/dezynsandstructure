import Header from "@/components/shop/Header";
import { Metadata } from "next";
import Bottom from "@/components/main/Bottom";

export const metadata: Metadata = {
  title: "Cart",
  description: "Shop for all architectural designs",
};

interface ShopProps {
    children: React.ReactNode;
}

export default function Layout({children,}: ShopProps) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Bottom/>
      </body>
    </html>
  );
}