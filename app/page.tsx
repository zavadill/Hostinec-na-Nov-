import Header from "@/components/Hlavni/Header";
import Menu from "@/components/Hlavni/Menu";
import Onas from "@/components/Hlavni/Onas";
import Prostory from "@/components/Hlavni/Prostory";
import Udalosti from "@/components/Hlavni/Udalosti";
import Galerie from "@/components/Hlavni/Galerie";
import Image from "next/image";
import Kontaktuje from "@/components/Hlavni/Kontaktuje";
import Rezervujte from "@/components/Hlavni/Rezervujte";

export default function Home() {
  return (
    <div>
      <Header />
      <Onas />
      <Menu />
      <Prostory />
      <Udalosti />
      <Galerie />
      <Kontaktuje />
      <Rezervujte />
    </div>
  );
}
