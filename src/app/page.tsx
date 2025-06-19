import { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Portafolio Interactivo | ConsultansGC",
  description: "Explora nuestros proyectos más recientes a través de este portafolio interactivo.",
};

export default function Home() {
  return (
    <HomeClient />
  );
}
