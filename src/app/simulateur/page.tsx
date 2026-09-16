import type { Metadata } from "next";
import { SimulateurHabitation } from "@/components/SimulateurHabitation";

export const metadata: Metadata = {
  title: "Étudier mon profil habitation",
  description:
    "Décrivez votre logement pour savoir si nous avons une solution adaptée, sans engagement.",
};

export default function SimulateurPage() {
  return <SimulateurHabitation />;
}
