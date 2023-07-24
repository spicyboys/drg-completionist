import type { CreateSchemaCustomizationArgs, GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async ({ actions: { createTypes } }: CreateSchemaCustomizationArgs) => {
    const typeDefs = `
    type WeaponsJsonOverclocks {
      type: OverclockTypesJson! @link(by: "name")
    }

    type MinersJson implements Node {
      weapons: [WeaponsJson!]! @link(by: "name")
    }
  `;
    createTypes(typeDefs);
  };

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    experiments: {
      asyncWebAssembly: true,
    },
  });
};
