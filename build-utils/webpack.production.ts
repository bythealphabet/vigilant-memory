import path from "path";
import { Configuration } from "webpack";
const CURRENT_WORKING_DIR = process.cwd();

function productionConfig(): Configuration {
  return {
    entry: "./src/index.tsx",
    output: {
      path: path.join(CURRENT_WORKING_DIR, "/build"),
      filename: "bundle.js",
      publicPath: "",
    },
  };
}

export default productionConfig;
