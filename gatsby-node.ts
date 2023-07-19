import type { CreateSchemaCustomizationArgs } from "gatsby";

export async function createSchemaCustomization({
  actions: { createTypes },
}: CreateSchemaCustomizationArgs): Promise<void> {
  const typeDefs = `
    type MinersJson implements Node {
      name: String!
      weapons: [WeaponsJson]! @link(by: "name")
    }
  `;
  createTypes(typeDefs);
}
