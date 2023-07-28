import { type CreateSchemaCustomizationArgs, type GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async ({ actions: { createTypes } }: CreateSchemaCustomizationArgs) => {
    const typeDefs = `
    type WeaponsJsonOverclocks {
      name: String!
      saveId: String!
      type: OverclockTypesJson! @link(by: "name")
    }

    type WeaponsJson implements Node {
      name: String!
      saveId: String!
      overclocks: [WeaponsJsonOverclocks!]!
    }

    type MinersJson implements Node {
      weapons: [WeaponsJson!]! @link(by: "name")
      color: String!
      contrastColor: String!
      name: String!
      saveId: String!
      weaponPaintJobs: [MinersJsonWeaponPaintJobs!]!
    }

    type MinersJsonWeaponPaintJobs {
      weaponPaintJob: WeaponPaintJobsJson! @link(by: "name")
      saveId: String!
    }

    type MinersJsonArmorPaintJobs {
      name: String!
    }

    type WeaponPaintJobsJson implements Node {
      name: String!
      saveId: String!
      source: WeaponPaintJobSource!
    }

    enum WeaponPaintJobSource {
      MATRIX_CORE
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
