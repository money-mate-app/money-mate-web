import { defineConfig } from "cypress";
import path from "path";

export default defineConfig({
    component: {
        devServer: {
            framework: "next",
            bundler: "webpack",
            webpackConfig: {
                resolve: {
                    alias: {
                        "@/*": path.resolve(__dirname, "./src/*"),
                    },
                },
            },
        },
    },
    e2e: {
        baseUrl: "http://localhost:3000",
        supportFile: false,
        experimentalStudio: true,
    },
});
