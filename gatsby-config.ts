import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `drg-completionist`,
    siteUrl: `https://drg-completionist.com`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DRG Completionist",
        short_name: "DRGC",
        description:
          "A free, open-source progressive web app that assists hard-working dwarves like yourselves in keeping track of all those gizmos cluttering up your Space Rig. With this app by your side, you can see just how close you are to becoming Deep Rock Galactic's most valuable employee!",
        homepage_url: "https://drg-completionist.com/",
        start_url: "/",
        lang: "en",
        default_locale: "en",
        theme_color: "#b37721",
        background_color: "#1a1a1a",
        display: "standalone",
        orientation: "landscape-primary",
        icon: "src/images/assignment.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `data`),
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-offline`,
  ],
};

export default config;
