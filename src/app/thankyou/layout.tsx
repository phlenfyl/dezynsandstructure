import Header from "@/components/shop/Header";
import { Metadata } from "next";
import Bottom from "@/components/main/Bottom";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Success page",
};

interface ShopProps {
  children: React.ReactNode;
}

export default function Layout({children}: ShopProps) {
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