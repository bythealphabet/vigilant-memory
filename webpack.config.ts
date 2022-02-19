import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

export default async function config({
  mode,
}: {
  mode: string;
}): Promise<Configuration> {
  return merge(
    {
      mode,
      module: {
        rules: [
          {
            test: /\.(ts|js)x?$/i,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                  "@babel/preset-react",
                  "@babel/preset-typescript",
                ],
              },
            },
          },
        ],
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"],
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: `${mode === "development" ? "Development Mode" : ""}`,
          template: "./public/index.html",
        }),
      ],
    },
    await modeConfig(mode)
  );
}

async function modeConfig(mode: string): Promise<object> {
  const module = await import(`./build-utils/webpack.${mode}`).then((m) =>
    m.default()
  );
  return module;
}
