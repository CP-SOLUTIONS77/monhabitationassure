/**
 * Pages locales « assurance habitation à <ville> », pour le référencement de
 * proximité autour de l'agence de Montereau-Fault-Yonne. Chaque page traite un
 * angle différent de l'assurance habitation, pour ne pas dupliquer le contenu
 * ni les pages ville des autres sites du cabinet.
 */

export type Section = {
  titre: string;
  paragraphes: string[];
  liste?: string[];
};

export type Ville = {
  slug: string;
  nom: string;
  /** Balise title (le suffixe du site est ajouté par le layout). */
  titre: string;
  description: string;
  h1: string;
  chapeau: string;
  sections: Section[];
  /** Accès à l'agence depuis la ville. */
  trajet: string;
  faq: { question: string; reponse: string }[];
};

export const VILLES: Ville[] = [
  {
    slug: "montereau-fault-yonne",
    nom: "Montereau-Fault-Yonne",
    titre: "Assurance habitation à Montereau-Fault-Yonne, en agence",
    description:
      "Comparez votre assurance habitation avec un courtier installé à Montereau-Fault-Yonne, 35 rue Jean Jaurès. Propriétaire ou locataire, plusieurs assureurs, sans engagement.",
    h1: "Votre assurance habitation à Montereau-Fault-Yonne, avec un courtier en agence",
    chapeau:
      "Mon Habitation Assuré est le service d'assurance habitation de CP Solutions, cabinet de courtage installé rue Jean Jaurès, en centre-ville de Montereau. Propriétaire ou locataire, vous pouvez comparer en ligne ou passer nous voir.",
    sections: [
      {
        titre: "Les informations à préparer",
        paragraphes: ["Pour un devis juste, munissez-vous de :"],
        liste: [
          "la surface et le nombre de pièces de votre logement, dépendances comprises ;",
          "une estimation de la valeur de vos biens : meubles, électroménager, appareils électroniques, objets de valeur ;",
          "votre contrat actuel, pour comparer à garanties équivalentes.",
        ],
      },
      {
        titre: "Changer d'assurance habitation",
        paragraphes: [
          "Après un an de contrat, la loi Hamon vous permet de résilier votre assurance habitation à tout moment, sans frais ni justification. Le nouvel assureur peut se charger des démarches de résiliation, et vous restez couvert sans interruption.",
        ],
      },
      {
        titre: "Ce qui fait vraiment la différence",
        paragraphes: [
          "Deux contrats au même prix peuvent indemniser très différemment : remboursement en valeur à neuf ou après vétusté, plafonds par objet, franchises, conditions de la garantie vol. Nous vous expliquons ces écarts avant de vous recommander un contrat.",
        ],
      },
    ],
    trajet:
      "L'agence est en centre-ville, au 35 rue Jean Jaurès, à une dizaine de minutes à pied de la gare. Stationnement en zone bleue devant l'agence.",
    faq: [
      {
        question: "Puis-je venir à l'agence sans rendez-vous ?",
        reponse:
          "Oui, l'agence est ouverte du lundi au samedi. Pour être sûr qu'un courtier soit disponible, appelez avant de passer ou prenez rendez-vous.",
      },
      {
        question: "Puis-je changer d'assurance habitation avant un an ?",
        reponse:
          "Avant un an, vous pouvez résilier à l'échéance annuelle ou lors d'un changement de situation, comme un déménagement. Après un an, la résiliation est possible à tout moment.",
      },
      {
        question: "Que veut dire valeur à neuf ?",
        reponse:
          "Vos biens sont remboursés au prix d'un bien neuf équivalent, sans déduction pour l'usure. Sans cette option, l'assureur applique un coefficient de vétusté et l'indemnité est plus faible.",
      },
    ],
  },
  {
    slug: "fontainebleau",
    nom: "Fontainebleau",
    titre: "Assurance habitation à Fontainebleau : maison de caractère, objets de valeur",
    description:
      "Maison ancienne, piscine, objets de valeur à Fontainebleau ou Avon ? Choisissez une assurance habitation qui couvre vraiment votre bien. Courtier indépendant, sans engagement.",
    h1: "Assurance habitation à Fontainebleau : bien assurer une maison de caractère",
    chapeau:
      "Maisons anciennes en lisière de forêt, appartements de standing près du château, propriétés avec piscine et dépendances : à Fontainebleau et à Avon, les biens ont souvent une valeur qui dépasse les plafonds d'un contrat standard.",
    sections: [
      {
        titre: "Déclarer précisément son logement",
        paragraphes: [
          "Surface, nombre de pièces, dépendances, piscine, véranda : une déclaration incomplète peut conduire l'assureur à réduire l'indemnité en cas de sinistre. Pour une maison ancienne, les matériaux et la qualité des finitions comptent aussi dans le coût d'une reconstruction.",
        ],
      },
      {
        titre: "Objets de valeur : attention aux plafonds",
        paragraphes: ["Bijoux, œuvres d'art, mobilier ancien, montres : la plupart des contrats prévoient des limites spécifiques."],
        liste: [
          "un plafond global pour les objets de valeur, souvent exprimé en pourcentage du capital mobilier ;",
          "des conditions de protection pour la garantie vol : serrures, volets, parfois alarme ;",
          "l'intérêt de conserver factures, photos ou expertises pour justifier la valeur.",
        ],
      },
      {
        titre: "Piscine, jardin, dépendances",
        paragraphes: [
          "Le local technique de la piscine, l'abri de jardin, le portail motorisé ou les arbres ne sont pas toujours couverts par défaut. Nous vérifions que chaque élément de votre propriété est bien inclus, et sous quelles conditions.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 25 minutes en voiture de Fontainebleau, et Fontainebleau-Avon est reliée à Montereau par la ligne R du Transilien. Tout peut aussi se faire à distance.",
    faq: [
      {
        question: "Mes bijoux sont-ils couverts par mon assurance habitation ?",
        reponse:
          "En général oui, mais dans la limite d'un plafond spécifique aux objets de valeur, et souvent sous conditions de protection contre le vol. Au-delà, une extension ou un contrat dédié peut être nécessaire.",
      },
      {
        question: "Ma piscine est-elle assurée ?",
        reponse:
          "Pas toujours par défaut. Elle doit souvent être déclarée, et ses équipements, comme le local technique ou le système de filtration, peuvent faire l'objet d'une option.",
      },
      {
        question: "Comment prouver la valeur de mes biens après un sinistre ?",
        reponse:
          "Conservez les factures, des photos de votre intérieur et, pour les objets les plus précieux, une expertise. Ces justificatifs facilitent nettement l'indemnisation.",
      },
    ],
  },
  {
    slug: "melun",
    nom: "Melun",
    titre: "Assurance habitation à Melun pour les locataires",
    description:
      "Locataire à Melun ? L'assurance habitation est obligatoire. Appartement, colocation, meublé : trouvez un contrat adapté et au juste prix avec un courtier indépendant.",
    h1: "Assurance habitation à Melun : les locataires bien couverts",
    chapeau:
      "À Melun comme dans toute l'agglomération, beaucoup d'habitants sont locataires. L'assurance habitation est alors obligatoire, et le bail type en vigueur depuis le 1er octobre 2026 prévoit expressément qu'un défaut d'assurance peut entraîner la résiliation du bail.",
    sections: [
      {
        titre: "Ce que vous devez assurer",
        paragraphes: [
          "La loi impose au locataire d'assurer au minimum les risques locatifs : les dommages que vous pourriez causer au logement, comme un incendie, un dégât des eaux ou une explosion. Vous devez remettre une attestation à votre propriétaire à la remise des clés, puis chaque année.",
          "Une multirisque habitation va plus loin : elle protège aussi vos propres biens et votre responsabilité civile dans la vie privée.",
        ],
      },
      {
        titre: "Les situations particulières",
        paragraphes: ["Certains cas demandent une attention spécifique :"],
        liste: [
          "la colocation : un contrat commun ou un contrat par colocataire, selon le bail ; le bail peut aussi prévoir que le propriétaire assure le logement pour le compte des colocataires ;",
          "le meublé : vos propres biens sont rares, mais votre responsabilité envers le logement et son mobilier doit être couverte ;",
          "les étudiants : des formules adaptées aux petites surfaces et aux budgets serrés existent.",
        ],
      },
      {
        titre: "Déménagement : pensez à votre contrat",
        paragraphes: [
          "Un déménagement permet de résilier votre assurance habitation, même avant un an. Profitez-en pour comparer : votre nouveau logement n'a peut-être pas les mêmes besoins que l'ancien.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Melun, et les deux villes sont reliées par la ligne R du Transilien. Une assurance habitation se souscrit très bien à distance.",
    faq: [
      {
        question: "L'assurance habitation est-elle obligatoire pour un locataire ?",
        reponse:
          "Oui. Le locataire doit assurer au minimum les risques locatifs et en justifier auprès de son propriétaire à la remise des clés, puis chaque année.",
      },
      {
        question: "Que risque un locataire non assuré ?",
        reponse:
          "Le propriétaire peut souscrire une assurance pour son compte et en refacturer le coût, et le bail peut être résilié. Surtout, en cas de sinistre, le locataire reste personnellement responsable des dégâts.",
      },
      {
        question: "En colocation, faut-il une seule assurance ?",
        reponse:
          "Cela dépend du bail. Chaque colocataire peut avoir son propre contrat, ou les colocataires peuvent souscrire un contrat commun qui les nomme tous. L'essentiel est que chacun soit bien couvert.",
      },
    ],
  },
  {
    slug: "nemours",
    nom: "Nemours",
    titre: "Assurance habitation à Nemours : crues du Loing, catastrophes naturelles",
    description:
      "Maison en bord de Loing à Nemours ? Vérifiez votre garantie catastrophes naturelles, vos franchises et vos délais de déclaration. Courtier indépendant en assurance habitation.",
    h1: "Assurance habitation à Nemours : se préparer aux crues du Loing",
    chapeau:
      "Les crues du Loing de juin 2016 ont durement touché Nemours et Saint-Pierre-lès-Nemours. Pour les logements proches de la rivière, l'assurance habitation doit être choisie en connaissance de cause.",
    sections: [
      {
        titre: "Comment fonctionne la garantie catastrophes naturelles",
        paragraphes: [
          "Tout contrat multirisque habitation inclut la garantie catastrophes naturelles. Elle s'applique lorsqu'un arrêté reconnaissant l'état de catastrophe naturelle est publié au Journal officiel pour votre commune. Vous disposez alors de trente jours pour déclarer votre sinistre.",
          "Une franchise fixée par la loi reste à votre charge, quel que soit votre assureur.",
        ],
      },
      {
        titre: "Ce que l'on oublie souvent",
        paragraphes: ["En zone inondable, vérifiez en particulier :"],
        liste: [
          "la couverture du sous-sol, du garage et de leur contenu ;",
          "les frais annexes : relogement temporaire, nettoyage, pompage ;",
          "les biens à l'extérieur, comme le mobilier de jardin ou les clôtures.",
        ],
      },
      {
        titre: "Après un sinistre",
        paragraphes: [
          "Photographiez les dégâts avant de jeter quoi que ce soit, conservez les objets endommagés quand c'est possible et rassemblez vos factures. Depuis 2026, la loi encadre aussi les délais dans lesquels l'assureur doit vous adresser une proposition d'indemnisation.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 30 minutes en voiture de Nemours. Si vous préférez ne pas vous déplacer, tout peut se faire par téléphone, par e-mail ou par courrier.",
    faq: [
      {
        question: "Mon logement est en zone inondable, un assureur peut-il refuser de m'assurer ?",
        reponse:
          "Un assureur peut refuser une souscription, mais d'autres accepteront. En cas de refus répétés, le Bureau central de tarification peut imposer à un assureur de couvrir le risque catastrophe naturelle.",
      },
      {
        question: "Combien de temps ai-je pour déclarer une inondation ?",
        reponse:
          "Trente jours à compter de la publication de l'arrêté de catastrophe naturelle au Journal officiel. Prévenez toutefois votre assureur dès le sinistre, sans attendre l'arrêté.",
      },
      {
        question: "Le relogement est-il pris en charge si ma maison est inhabitable ?",
        reponse:
          "Cela dépend de votre contrat. Beaucoup de multirisques prévoient des frais de relogement, avec un plafond et une durée maximale. C'est un point à vérifier avant le sinistre.",
      },
    ],
  },
  {
    slug: "sens",
    nom: "Sens",
    titre: "Assurance habitation à Sens : fissures, sécheresse et sols argileux",
    description:
      "Fissures sur votre maison à Sens ? Le retrait-gonflement des argiles relève de la garantie catastrophes naturelles. Comment être indemnisé, avec un courtier indépendant.",
    h1: "Assurance habitation à Sens : fissures et retrait-gonflement des argiles",
    chapeau:
      "Dans de nombreuses communes de l'Yonne et de la Seine-et-Marne, les sols argileux se rétractent pendant les sécheresses puis regonflent avec la pluie. Ces mouvements peuvent fissurer les maisons, et l'indemnisation suit des règles particulières.",
    sections: [
      {
        titre: "Savoir si votre maison est exposée",
        paragraphes: [
          "La carte d'exposition au retrait-gonflement des argiles est consultable gratuitement sur le site public Géorisques, à partir de votre adresse. Les maisons individuelles aux fondations peu profondes sont les plus sensibles.",
        ],
      },
      {
        titre: "Être indemnisé après une sécheresse",
        paragraphes: ["Les fissures dues à la sécheresse relèvent de la garantie catastrophes naturelles :"],
        liste: [
          "un arrêté de catastrophe naturelle doit reconnaître la sécheresse pour votre commune, parfois plus d'un an après l'épisode ;",
          "vous disposez ensuite de trente jours pour déclarer le sinistre à votre assureur ;",
          "un expert vérifie que les désordres sont bien liés au mouvement du sol ;",
          "une franchise fixée par la loi reste à votre charge.",
        ],
      },
      {
        titre: "Garder des preuves",
        paragraphes: [
          "Photographiez et datez les fissures dès leur apparition, et notez leur évolution. Ces éléments seront précieux au moment de l'expertise, surtout si l'arrêté arrive longtemps après.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 35 minutes en voiture de Sens, et les deux villes sont sur la ligne Paris-Sens. Un devis se fait très bien à distance.",
    faq: [
      {
        question: "Mon assurance habitation couvre-t-elle les fissures dues à la sécheresse ?",
        reponse:
          "Oui, au titre de la garantie catastrophes naturelles, à condition qu'un arrêté reconnaisse la sécheresse pour votre commune et que l'expert relie les fissures au mouvement du sol.",
      },
      {
        question: "Que faire si ma commune n'est pas reconnue en catastrophe naturelle ?",
        reponse:
          "Sans arrêté, la garantie catastrophes naturelles ne s'applique pas. La commune peut déposer une demande de reconnaissance : signalez vos dégâts à la mairie, et conservez vos photos datées.",
      },
      {
        question: "Comment savoir si mon terrain est argileux ?",
        reponse:
          "Consultez la carte d'exposition au retrait-gonflement des argiles sur le site public Géorisques, en saisissant votre adresse.",
      },
    ],
  },
  {
    slug: "provins",
    nom: "Provins",
    titre: "Assurance habitation à Provins : propriétaires bailleurs et assurance PNO",
    description:
      "Propriétaire bailleur à Provins ? Assurance PNO, location à l'année ou de courte durée : protégez votre bien avec un courtier indépendant. Étude sans engagement.",
    h1: "Assurance habitation à Provins, pour les propriétaires bailleurs",
    chapeau:
      "Appartements dans la ville haute, maisons louées à l'année, logements proposés aux visiteurs de la cité médiévale : à Provins, beaucoup de propriétaires louent un bien. Leur assurance obéit à des règles particulières.",
    sections: [
      {
        titre: "L'assurance propriétaire non occupant",
        paragraphes: [
          "L'assurance propriétaire non occupant, ou PNO, protège le bailleur quand l'assurance du locataire ne joue pas : logement vide entre deux locations, locataire non assuré, dommages dont le locataire n'est pas responsable.",
          "Elle est obligatoire pour tout copropriétaire qui n'occupe pas son logement, et vivement recommandée pour une maison individuelle louée.",
        ],
      },
      {
        titre: "Location de courte durée",
        paragraphes: ["Si vous louez à des touristes, prévenez votre assureur :"],
        liste: [
          "tous les contrats ne couvrent pas la location saisonnière ou de courte durée ;",
          "les dégradations par les voyageurs et le vol par un occupant sont souvent exclus sans garantie spécifique ;",
          "les plateformes de réservation proposent parfois une protection, mais avec des limites à vérifier.",
        ],
      },
      {
        titre: "Bien ancien, garanties adaptées",
        paragraphes: [
          "Murs en pierre, charpente ancienne, immeuble en secteur protégé : le coût d'une remise en état peut être élevé. Vérifiez que le capital assuré et les garanties correspondent réellement à votre bien.",
        ],
      },
    ],
    trajet:
      "L'agence de Montereau-Fault-Yonne est à environ 40 minutes en voiture de Provins. Pour la plupart de nos clients provinois, tout se fait par téléphone et par e-mail.",
    faq: [
      {
        question: "L'assurance PNO est-elle obligatoire ?",
        reponse:
          "Oui pour tout copropriétaire non occupant, en application de la loi de 1965 sur la copropriété. Hors copropriété, elle n'est pas obligatoire mais reste vivement recommandée.",
      },
      {
        question: "Mon locataire est assuré, ai-je besoin d'une PNO ?",
        reponse:
          "Oui, car l'assurance du locataire ne couvre pas tout : logement vide, dommages dont il n'est pas responsable, ou défaut d'assurance en cours de bail.",
      },
      {
        question: "Ma multirisque couvre-t-elle la location aux touristes ?",
        reponse:
          "Pas forcément. La location de courte durée doit être déclarée à l'assureur, et une garantie spécifique est souvent nécessaire pour couvrir les dégradations et le vol par les occupants.",
      },
    ],
  },
];

export function getVille(slug: string): Ville | undefined {
  return VILLES.find((v) => v.slug === slug);
}
