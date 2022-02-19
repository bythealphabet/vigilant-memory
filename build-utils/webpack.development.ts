import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";

function developmentConfig(): Configuration {
  return {
    devtool: "source-map",
    devServer: {
      port: 3000,
      hot: true,
      open: true,
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        async: false,
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
      }),
    ],
  };
}

export default developmentConfig;
