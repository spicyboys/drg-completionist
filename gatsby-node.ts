import { type CreateSchemaCustomizationArgs, type GatsbyNode } from "gatsby";
import fs from "fs";
import path from "path";
import { promisify } from "util";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  async ({ actions: { createTypes } }: CreateSchemaCustomizationArgs) => {
    const typeDefs = await promisify(fs.readFile)(
      path.resolve(__dirname, "schema.gql"),
      {
        encoding: "utf8",
      }
    );
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
