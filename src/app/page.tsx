'use client'
import Top from "@/components/main/Top";
import Mainbody from "@/components/main/Mainbody";
import Bottom from "@/components/main/Bottom";

export default function Home() {
  return (
    <div className="bg-black">
      <Top/>

      <Mainbody/>

      <Bottom/>

    </div>
  );
}
