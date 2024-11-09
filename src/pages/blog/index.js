import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {
  cardContainer,
  card,
  cardTitle,
  cardLink,
  tag,
} from "./index.module.css";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Publications">
      <div className={cardContainer}>
        {data.allMdx.nodes.map((node) => {
          const image = getImage(node.frontmatter.hero_image);

          return (
            <article key={node.id} className={card}>
              <GatsbyImage
                image={image}
                alt={node.frontmatter.hero_image_alt}
              />

              <h2 className={cardTitle}>
                <Link
                  to={`/blog/${node.frontmatter.slug}`}
                  className={cardLink}
                >
                  {node.frontmatter.title}
                </Link>
              </h2>

              <p>Posted: {node.frontmatter.date}</p>

              <p>{node.excerpt}</p>
              <Link to={`/blog/${node.frontmatter.slug}`} className={cardLink}>
                <span className={tag}>En savoir plus</span>
              </Link>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug

          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
