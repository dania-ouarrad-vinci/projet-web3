import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="À propos">
      <p>Ce site illustre plusieurs des avantages de Gatsby, notamment :</p>
      <ul>
        <li>
          <strong>Performance rapide</strong> : Grâce à la génération de pages
          statiques au moment de la construction du site, chaque page est déjà
          préchargée. Par exemple, lorsque vous passez la souris sur un lien, la
          page se charge instantanément dès que vous cliquez, sans délai.
        </li>
        <li>
          <strong>Prise en charge de l'optimisation automatique</strong> :
          Gatsby optimise les images, le code JavaScript et les ressources de
          manière automatique pour garantir un chargement rapide, quel que soit
          l'appareil utilisé.
        </li>
        <li>
          <strong>Navigation fluide</strong> : La navigation entre les pages est
          instantanée, grâce à l’utilisation de la pré-génération des pages et
          du préchargement des données. Vous remarquerez que le site semble
          instantanément prêt à afficher de nouvelles pages dès que vous
          survolez un lien.
        </li>
        <li>
          <strong>Réactivité et interactivité</strong> : Gatsby prend en charge
          l'intégration de React, permettant une interface dynamique et réactive
          tout en garantissant une expérience utilisateur fluide et rapide.
        </li>
      </ul>

      <p>
        Cependant, malgré ses nombreux avantages, Gatsby présente aussi
        certaines limites qu'il est important de connaître :
      </p>
      <ul>
        <li>
          <strong>Temps de construction initial</strong> : Gatsby génère un site
          statique à chaque build. Ce processus peut prendre un certain temps,
          notamment pour les projets comportant un grand nombre de pages ou une
          base de données complexe.
        </li>
        <li>
          <strong>Gestion des données dynamiques</strong> : Bien que Gatsby
          permette de récupérer des données dynamiques lors de la construction
          du site, la mise à jour en temps réel des données (comme dans un site
          très interactif ou une application avec des mises à jour fréquentes)
          peut être plus complexe à gérer. Des solutions comme Gatsby Cloud ou
          l'intégration d'APIs externes peuvent être nécessaires pour contourner
          ce problème.
        </li>
        <li>
          <strong>Limité dans les applications très dynamiques</strong> : Gatsby
          est principalement conçu pour des sites statiques. Si votre projet
          nécessite une gestion complexe d'état côté client ou une interactivité
          en temps réel, il peut être plus adapté de se tourner vers une autre
          solution comme Next.js ou d'autres frameworks React dédiés aux
          applications web dynamiques.
        </li>
        <li>
          <strong>Grande dépendance aux plugins</strong> : Bien que Gatsby
          dispose d'un grand écosystème de plugins, la dépendance à ces plugins
          peut rendre le projet difficile à maintenir sur le long terme, surtout
          si ces plugins ne sont pas bien entretenus ou mis à jour
          régulièrement.
        </li>
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
