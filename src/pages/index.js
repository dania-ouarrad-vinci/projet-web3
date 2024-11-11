import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";
import imageComputer from '../images/computer.jpg'


const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        Ce site a été développé par des étudiantes de la Haute École Léonard de
        Vinci dans le cadre du projet du cours Web 2024. Le projet a été réalisé
        avec la technologie Gatsby dans le but de créer une vidéo de
        présentation.
      </p>
      <p>
        Ce projet de développement est un exemple simple mais efficace pour
        démontrer les possibilités, les avantages et les limites de Gatsby en
        tant que framework de génération de sites statiques.
      </p>
      <StaticImage
        alt="image d'ordinateur"
        src="../images/computer.jpg"
      />
     
      {/*
      <h2>Sans le plugin</h2>
      <img src={imageComputer} alt="Image d'ordinateur sans optimisation"/> 
      */}

    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
