import type { CreateSchemaCustomizationArgs } from "gatsby";

export async function createSchemaCustomization({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs): Promise<void> {
  const typeDefs = `
    type WeaponsJsonOverclocks {
      type: OverclockTypesJson! @link(by: "name")
    }

    type MinersJson implements Node {
      weapons: [WeaponsJson!]! @link(by: "name")
    }
  `;
  createTypes(typeDefs);
}
