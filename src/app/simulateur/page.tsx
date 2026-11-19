import type { Metadata } from "next";
import { SimulateurHabitation } from "@/components/SimulateurHabitation";

export const metadata: Metadata = {
  title: "Devis assurance habitation",
  description:
    "Obtenez un devis d'assurance habitation en six questions : un courtier indépendant compare plusieurs assureurs pour votre logement. Gratuit et sans engagement.",
  alternates: { canonical: "/simulateur" },
};

export default function SimulateurPage() {
  return <SimulateurHabitation />;
}
