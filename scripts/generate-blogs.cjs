const fs = require('fs');
const path = require('path');

const keywords = [
    "Plombier à Tournai : dépannage, installation sanitaire et devis",
    "Plombier d’urgence à Tournai : que faire avant notre arrivée ?",
    "Dépannage plomberie à Tournai : fuite, WC bouché, eau chaude et canalisations",
    "Urgence dégât des eaux à Tournai : couper l’eau, protéger le logement et déclarer le sinistre",
    "Fuite d’eau à Tournai : comment la repérer et la faire réparer rapidement ?",
    "Recherche de fuite non destructive à Tournai : caméra thermique, ultrason et rapport pour l’assurance",
    "Fuite encastrée ou après compteur à Tournai : diagnostic, réparation et prise en charge assurance",
    "Fuite de robinet, de chasse d’eau ou de siphon à Tournai : quand réparer ou remplacer ?",
    "Canalisation bouchée à Tournai : causes, premiers gestes et intervention professionnelle",
    "Débouchage de canalisation à Tournai : furet, haute pression ou inspection caméra ?",
    "Débouchage WC à Tournai : que faire en cas de refoulement ou de débordement ?",
    "Débouchage d’évier à Tournai : graisse, calcaire et mauvaises odeurs",
    "Débouchage de douche ou baignoire à Tournai : cheveux, savon et évacuation lente",
    "Débouchage d’égout à Tournai : diagnostic, curage et prévention des refoulements",
    "Inspection caméra de canalisation à Tournai : dans quels cas et avec quel rapport ?",
    "Hydrocurage des canalisations à Tournai : pour quels bouchons et à quel prix ?",
    "Racines dans les canalisations à Tournai : comment les détecter et les éliminer ?",
    "Chambre de visite introuvable ou bouchée à Tournai : comment intervenir ?",
    "Vidange de fosse septique à Tournai : fréquence, signes d’alerte et déroulement",
    "Pompage de cave inondée à Tournai : mesures d’urgence et remise en état",
    "Prix d’un débouchage de canalisation à Tournai : forfait, caméra, haute pression et majorations",
    "Prix d’une recherche de fuite à Tournai : ce qui est compris dans le diagnostic",
    "Tarifs d’un plombier d’urgence à Tournai : déplacement, main-d’œuvre, pièces et suppléments",
    "Installation sanitaire à Tournai : créer ou remplacer une douche, un lavabo, un WC ou un évier",
    "Remplacement de robinetterie à Tournai : choisir un mitigeur, un thermostatique ou un robinet économique",
    "Réparation de chasse d’eau et WC suspendu à Tournai : pannes fréquentes et solutions",
    "Baisse de pression d’eau à Tournai : causes, diagnostic et réparation",
    "Remplacement des anciennes tuyauteries à Tournai : matériaux, accès et budget",
    "Raccordement de lave-linge et lave-vaisselle à Tournai : arrivée d’eau, évacuation et sécurité",
    "Robinet extérieur antigel à Tournai : installation et protection contre le gel",
    "Conduites gelées à Tournai : gestes à éviter et réparation par un plombier",
    "Chauffe-eau en panne à Tournai : pourquoi n’avez-vous plus d’eau chaude ?",
    "Dépannage de boiler à Tournai : résistance, thermostat, soupape, anode et fuite",
    "Détartrage de chauffe-eau et boiler à Tournai : quand le prévoir et combien coûte-t-il ?",
    "Remplacer un chauffe-eau à Tournai : électrique, gaz ou boiler thermodynamique ?",
    "Prix d’un chauffe-eau ou boiler à Tournai : appareil, pose et frais à prévoir",
    "Boiler thermodynamique à Tournai : conditions d’installation, consommation et rentabilité",
    "Adoucisseur d’eau à Tournai : faut-il en installer un dans votre habitation ?",
    "Eau calcaire à Tournai : mesurer la dureté de l’eau et protéger vos installations",
    "Adoucisseur au sel, CO₂ ou filtre anticalcaire à Tournai : comment choisir ?",
    "Entretien d’un adoucisseur d’eau à Tournai : sel, réglages, désinfection et contrôles",
    "Groupe hydrophore et récupération d’eau de pluie à Tournai : installation, filtration et entretien",
    "Salle de bain à Tournai : les étapes d’une rénovation complète sans mauvaise surprise",
    "Prix d’une rénovation de salle de bain à Tournai : budgets, postes de coût et exemples de devis",
    "Petite salle de bain à Tournai : douche à l’italienne, rangements et optimisation de l’espace",
    "Transformer une baignoire en douche à Tournai : coût, délais et contraintes techniques",
    "Salle de bain accessible à Tournai : douche PMR, sécurité et maintien à domicile",
    "Rénovation de salle de bain à Tournai : plomberie, étanchéité, ventilation et coordination des travaux",
    "Chauffagiste à Tournai : installation, entretien et dépannage de chauffage",
    "Chaudière en panne à Tournai : diagnostic des symptômes et gestes de sécurité",
    "Dépannage chaudière à Tournai : pression, mise en sécurité, radiateurs froids et eau chaude",
    "Entretien de chaudière à Tournai : obligations en Wallonie, attestation et opérations réalisées",
    "Prix de l’entretien d’une chaudière à Tournai : gaz, mazout et prestations incluses",
    "Remplacement de chaudière à Tournai : quand agir et comment préparer son projet ?",
    "Chaudière gaz à condensation ou pompe à chaleur à Tournai : quelle solution pour votre logement ?",
    "Prix d’une nouvelle chaudière à Tournai : matériel, installation, TVA et facteurs de coût",
    "Aides et primes en Wallonie pour le chauffage à Tournai : conditions et démarches à jour",
    "Mise en conformité gaz à Tournai : contrôle, réception et documents à prévoir",
    "Odeur de gaz ou suspicion de monoxyde de carbone à Tournai : les réflexes de sécurité",
    "Radiateurs froids à Tournai : purge, équilibrage, pression ou panne de circulation ?",
    "Chauffage au sol à Tournai : installation, rénovation et diagnostic d’un plancher qui chauffe mal",
    "Pompe à chaleur à Tournai : étude de faisabilité, dimensionnement, bruit et emplacement extérieur",
    "Pompe à chaleur air-air ou air-eau à Tournai : différences, usages et critères de choix",
    "Climatisation réversible à Tournai : installation, entretien et consommation réelle",
    "Ventilation de salle de bain à Tournai : lutter contre l’humidité, la condensation et les moisissures",
    "VMC simple flux ou double flux à Tournai : choisir, entretenir et résoudre les problèmes de bruit",
    "Prix d’un dépannage chauffage à Tournai : diagnostic, déplacement, pièces et urgence",
    "Comment se déroule une intervention de plombier à Tournai, de l’appel au compte rendu ?",
    "Devis plombier à Tournai : quelles photos et informations préparer pour obtenir un prix fiable ?",
    "Locataire ou propriétaire à Tournai : qui paie une fuite, un débouchage ou une réparation sanitaire ?",
    "Plomberie et assurance à Tournai : quels documents demander après une fuite ou un dégât des eaux ?",
    "Garanties, assurances et qualifications d’un plombier à Tournai : les points à vérifier avant de signer",
    "Délais d’intervention d’un plombier à Tournai : urgence, rendez-vous planifié et zone desservie",
    "Entretien préventif de plomberie à Tournai : checklist pour éviter fuites, bouchons et pannes",
    "Préparer votre plomberie pour l’hiver à Tournai : gel, chauffage, robinet extérieur et absence prolongée",
    "Plombier à Kain : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Froyennes : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Templeuve : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Blandain : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Ramegnies-Chin : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Mont-Saint-Aubert : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Pecq : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Rumes : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Antoing : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Brunehaut : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Celles : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Estaimpuis : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Leuze-en-Hainaut : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Péruwelz : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Mouscron : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Ath : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Frasnes-lez-Anvaing : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Beloeil : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Bernissart : dépannage, fuite, débouchage et installations sanitaires",
    "Plombier à Mont-de-l’Enclus : dépannage, fuite, débouchage et installations sanitaires",
    "Dépannage plomberie en Wallonie picarde : communes couvertes, délais et modalités d’intervention",
    "Rénovation de salle de bain en Wallonie picarde : études de cas, budgets et réalisations locales",
    "Avis clients et réalisations de plomberie à Tournai : fuites, débouchages, chauffage et salles de bain"
];

const outDir = path.join(__dirname, '../src/content/blog');
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

function generateSlug(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
}

function generateMarkdown(keyword, index) {
    const slug = generateSlug(keyword.split(':')[0].trim()); // Just slugify the first part for URL
    const title = keyword;
    const date = new Date(Date.now() - index * 86400000).toISOString().split('T')[0];
    
    // Core Keyword for body
    const primaryTerm = keyword.split(':')[0].trim();
    
    // Weave SEO optimized content
    return `---
title: "${title.replace(/"/g, '\\"')}"
description: "Découvrez notre guide complet sur : ${primaryTerm}. Besoin d'une intervention rapide à Tournai et ses environs ? Contactez-nous 24/7 au +32 000 00 00 00."
pubDate: 2026-09-02
primaryKeyword: "${primaryTerm}"
heroImage: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fm=webp&fit=crop&w=1920&q=80"
---

Bienvenue sur notre guide détaillé concernant **${primaryTerm}**. Si vous cherchez un expert pour résoudre vos problèmes de plomberie, chauffage ou débouchage, vous êtes au bon endroit. Chez Plombier Tournai, nous intervenons rapidement pour tous vos soucis liés à "${title}".

## L'importance de faire appel à un professionnel pour ${primaryTerm}

Les problèmes de plomberie ne préviennent jamais. Qu'il s'agisse d'une urgence au milieu de la nuit ou d'un entretien programmé, l'intervention d'un plombier qualifié est essentielle. Nos techniciens agréés (CERGA/CEDICO) possèdent l'expertise nécessaire pour diagnostiquer précisément le problème et proposer une solution durable.

> **Le saviez-vous ?**  
> Bricoler soi-même une réparation de plomberie peut aggraver la situation et annuler la prise en charge par votre assurance habitation en cas de dégât des eaux. Il est toujours recommandé de confier cette tâche à un artisan certifié.

## Nos interventions partout à Tournai et dans le Tournaisis

La rapidité d'intervention est notre priorité absolue. Nous couvrons l'ensemble de Tournai, ainsi que les communes avoisinantes : Kain, Froyennes, Orcq, Marquain, Ramegnies-Chin, Blandain, Templeuve et bien d'autres. 

Quel que soit votre problème lié à **${primaryTerm}**, nous disposons d'outils de pointe (caméra endoscopique, furet haute pression, détecteurs thermiques) pour une réparation efficace et sans destruction inutile.

## Les 4 étapes de notre service :

1. **L'Appel d'Urgence :** Vous nous contactez au +32 000 00 00 00. Nous évaluons la situation par téléphone.
2. **Le Déplacement Rapide :** Un technicien arrive chez vous (généralement en moins de 30 minutes pour les urgences).
3. **Le Devis Transparent :** Avant toute intervention concernant *${title.toLowerCase()}*, nous établissons un devis clair et définitif.
4. **La Réparation :** Nous résolvons le problème avec des pièces de haute qualité, garanties sur le long terme.

## FAQ : Questions fréquentes

### ⏱️ Quel est le temps d'attente moyen pour un dépannage ?
Pour toute urgence vitale (fuite majeure, débouchage), nous visons un délai d'intervention de moins de 30 minutes sur Tournai centre et sa périphérie immédiate.

### 💰 Les tarifs sont-ils majorés le week-end ?
Nos tarifs de base restent très compétitifs. Une majoration transparente s'applique uniquement pour les interventions de nuit, le dimanche ou les jours fériés. Tout est indiqué sur votre devis préalable.

### 📜 Délivrez-vous un rapport pour mon assurance ?
Oui, absolument. Suite à une recherche de fuite ou un dégât des eaux majeur, nous fournissons un compte rendu détaillé avec photos, indispensable pour faciliter votre demande de remboursement auprès de votre assurance.

---

**Un problème de plomberie ne peut pas attendre !**  
Faites confiance à une équipe locale et expérimentée. Pour toute question ou pour programmer une intervention immédiate, appelez-nous !

📞 **Urgence 24/7 : +32 000 00 00 00**  
📧 **Demandez un Devis :** [Contactez-nous](/contact)
`;
}

keywords.forEach((kw, i) => {
    const content = generateMarkdown(kw, i);
    const slug = generateSlug(kw.split(':')[0].trim()) || `blog-post-${i}`;
    const filePath = path.join(outDir, `${slug}.md`);
    fs.writeFileSync(filePath, content);
    console.log(`Created ${filePath}`);
});

console.log(`Successfully generated ${keywords.length} blog articles!`);
