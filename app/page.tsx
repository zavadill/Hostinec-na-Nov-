import Header from "@/components/Hlavni/Header";
import Menu from "@/components/Hlavni/Menu";
import Onas from "@/components/Hlavni/Onas";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Onas />
      <Menu />
    </div>
  );
}
