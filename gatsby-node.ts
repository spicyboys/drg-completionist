import type { CreateSchemaCustomizationArgs } from "gatsby";

export async function createSchemaCustomization({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs): Promise<void> {
  const typeDefs = `
    type MinersJson implements Node {
      weapons: [WeaponsJson]! @link(by: "name")
    }

    type WeaponsJsonOverclocks implements Node {
      type: OverclockTypesJson! @link(by: "name")
    }
  `;
  createTypes(typeDefs);
}
