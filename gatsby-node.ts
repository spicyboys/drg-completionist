import { type CreateSchemaCustomizationArgs, type GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async ({ actions: { createTypes } }: CreateSchemaCustomizationArgs) => {
    const typeDefs = `
    type WeaponsJsonOverclocks {
      name: String!
      saveId: String!
      type: OverclockTypesJson! @link(by: "name")
    }

    type WeaponsJsonFrameworksJson {
      saveId: String!
      framework: WeaponFrameworksJson! @link(by: "name")
    }

    type WeaponsJson implements Node {
      name: String!
      saveId: String!
      overclocks: [WeaponsJsonOverclocks!]!
      frameworks: [WeaponsJsonFrameworksJson!]!
    }

    type MinersJson implements Node {
      weapons: [WeaponsJson!]! @link(by: "name")
      color: String!
      contrastColor: String!
      name: String!
      saveId: String!
      weaponPaintJobs: [MinersJsonWeaponPaintJobs!]!
      armorPaintJobs: [MinersJsonArmorPaintJobs!]!
    }

    type MinersJsonWeaponPaintJobs {
      weaponPaintJob: WeaponPaintJobsJson! @link(by: "name")
      saveId: String!
    }

    type MinersJsonArmorPaintJobs {
      name: String!
      saveId: String!
    }

    type WeaponPaintJobsJson implements Node {
      name: String!
      saveId: String!
      source: CollectableSource!
    }

    type WeaponFrameworksJson implements Node {
      name: String!
      source: CollectableSource!
    }

    enum CollectableSource {
      CARGO_CRATE
      PERFORMANCE_PASS
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
