module.exports = {
  siteMetadata: {
    siteUrl: "https://blog-programmation.netlify.app",
    title: "Les bases du code",
    description:
      "Un site d'apprentissage des bases du code, avec des ressources pour débutants et des exemples pratiques.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
