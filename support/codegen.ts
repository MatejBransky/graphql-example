import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./support/schema.graphql",
  documents: ["./src/**/*.gql"],
  ignoreNoDocuments: false, // for better experience with the watcher
  generates: {
    "./src/generated/": {
      preset: "client",
    },
  },
};

export default config;
