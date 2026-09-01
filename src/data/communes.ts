export interface Commune {
  slug: string;
  name: string;
  postalCode: string;
  distanceFromTournai: string; // e.g. "5 km"
  interventionTime: string; // e.g. "15 minutes"
  neighborhoods: string[];
  directions: {
    from: string;
    route: string;
  };
  competitorComparison: {
    point: string;
    us: string;
    others: string;
  }[];
  heroImage: string;
}

export const communes: Commune[] = [
  {
    slug: "kain",
    name: "Kain",
    postalCode: "7540",
    distanceFromTournai: "3 km",
    interventionTime: "10 minutes",
    neighborhoods: ["Le Mont-Saint-Aubert", "La Tombe", "Kain-Centre", "Le Reposoir"],
    directions: {
      from: "La Cathédrale Notre-Dame de Tournai",
      route: "Prenez la direction nord via le Quai Dumon, puis suivez la Chaussée de Renaix (N48). Vous arrivez à Kain en moins de 10 minutes."
    },
    competitorComparison: [
      { point: "Délais d'intervention", us: "En moins de 30 min garanti", others: "Souvent + de 4 heures ou le lendemain" },
      { point: "Tarification", us: "Devis clair avant travaux", others: "Frais cachés fréquents (déplacement, majoration)" },
      { point: "Artisanat local", us: "Entreprise 100% locale (Tournaisis)", others: "Plateformes de mise en relation nationales" }
    ],
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fm=webp&fit=crop&w=1920&q=80"
  },
  {
    slug: "froyennes",
    name: "Froyennes",
    postalCode: "7503",
    distanceFromTournai: "4 km",
    interventionTime: "15 minutes",
    neighborhoods: ["Zone Commerciale Les Bastions (proximité)", "Froyennes-Centre", "Bourg de Froyennes"],
    directions: {
      from: "La Grand-Place de Tournai",
      route: "Sortez du centre par le Boulevard des Déportés, puis prenez la N29 ou traversez via le Boulevard Walter de Marvis en direction de la zone de Froyennes."
    },
    competitorComparison: [
      { point: "Délais d'intervention", us: "En moins de 30 min garanti", others: "Souvent + de 4 heures ou le lendemain" },
      { point: "Tarification", us: "Devis clair avant travaux", others: "Frais cachés fréquents (déplacement, majoration)" },
      { point: "Artisanat local", us: "Entreprise 100% locale (Tournaisis)", others: "Plateformes de mise en relation nationales" }
    ],
    heroImage: "https://images.unsplash.com/photo-1574360743628-fea218e8dc48?auto=format&fm=webp&fit=crop&w=1920&q=80"
  },
  {
    slug: "mouscron",
    name: "Mouscron",
    postalCode: "7700",
    distanceFromTournai: "25 km",
    interventionTime: "30 minutes",
    neighborhoods: ["Luce", "Le Tuquet", "La Marlière", "Risquons-Tout", "Mont-à-Leux"],
    directions: {
      from: "Tournai Expo",
      route: "Empruntez l'autoroute E403/A17 en direction de Courtrai/Bruges. Prenez la sortie Mouscron. Le trajet direct prend environ 25 minutes selon le trafic."
    },
    competitorComparison: [
      { point: "Disponibilité", us: "Artisans disponibles 24/7 sur Mouscron", others: "Artisans souvent débordés côté frontière" },
      { point: "Transparence", us: "Prix forfaitaires clairs", others: "Tarification horaire incertaine" },
      { point: "Pièces", us: "Stock d'urgence dans nos camions", others: "Attente de commande fournisseur" }
    ],
    heroImage: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fm=webp&fit=crop&w=1920&q=80"
  },
  {
    slug: "ath",
    name: "Ath",
    postalCode: "7800",
    distanceFromTournai: "30 km",
    interventionTime: "35 minutes",
    neighborhoods: ["Faubourg de Bruxelles", "Faubourg de Tournai", "Lorette", "Irchonwelz"],
    directions: {
      from: "Gare de Tournai",
      route: "Rejoignez l'autoroute E42 en direction de Mons, prenez la sortie 32 (Vaulx) pour rattraper la N7 qui vous mène directement au centre d'Ath."
    },
    competitorComparison: [
      { point: "Délais d'intervention", us: "Intervention dans la journée", others: "Plusieurs jours d'attente" },
      { point: "Tarification", us: "Devis gratuit sans engagement", others: "Devis payant ou déplacement facturé" },
      { point: "Garantie", us: "Garantie décennale et pièces", others: "Garantie limitée" }
    ],
    heroImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fm=webp&fit=crop&w=1920&q=80"
  },
  {
    slug: "peruwelz",
    name: "Péruwelz",
    postalCode: "7600",
    distanceFromTournai: "22 km",
    interventionTime: "25 minutes",
    neighborhoods: ["Roucourt", "Bury", "Bon-Secours", "Wiers", "Brasménil"],
    directions: {
      from: "Les Bastions (Tournai)",
      route: "Prenez la N60 vers le sud-est, puis rattrapez la N501 en direction de Péruwelz. Accès facile et rapide en 25 minutes."
    },
    competitorComparison: [
      { point: "Proximité", us: "Couverture rapide du réseau transfrontalier", others: "Refus d'intervention selon la zone" },
      { point: "Tarification", us: "Pas de majoration kilométrique excessive", others: "Frais de déplacement élevés" },
      { point: "Agréation", us: "Chauffagistes agréés CERGA/CEDICO", others: "Non agréés" }
    ],
    heroImage: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fm=webp&fit=crop&w=1920&q=80"
  },
  {
    slug: "orcq",
    name: "Orcq",
    postalCode: "7501",
    distanceFromTournai: "3 km",
    interventionTime: "10 minutes",
    neighborhoods: ["Orcq-Village", "Zone industrielle", "Proximité Marquain"],
    directions: {
      from: "Pont des Trous (Tournai)",
      route: "Prenez le Boulevard Delwart puis la Chaussée de Lille (N8). Orcq se situe juste à la sortie ouest de Tournai, à 5 minutes."
    },
    competitorComparison: [
      { point: "Délais d'intervention", us: "En moins de 30 min garanti", others: "Souvent + de 4 heures ou le lendemain" },
      { point: "Tarification", us: "Devis clair avant travaux", others: "Frais cachés fréquents (déplacement, majoration)" },
      { point: "Artisanat local", us: "Entreprise 100% locale (Tournaisis)", others: "Plateformes de mise en relation nationales" }
    ],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fm=webp&fit=crop&w=1920&q=80"
  }
];
