import {RuleSetRule} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): RuleSetRule[]{
    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            //вернет true если module и обработает как модули
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ?
                                '[path][name]__[local]--[hash:base64:5]'
                                : '[hash:base64:8]'
                        },
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        };
    //без ts понадобился бы транспилятор babel
    const typescriptLoader = {
        test: /\.tsx?$/, // переводить tsx в ts
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [
        typescriptLoader,
        cssLoader,
    ]
}