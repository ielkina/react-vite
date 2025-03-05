import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import combineDuplicatedSelectors from "postcss-combine-duplicated-selectors";
// import { environments } from "eslint-plugin-vue";
// import path from "path";

const ReactCompilerConfig = {
  presets: ["@babel/preset-react"],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-proposal-class-properties",
  ],
};

export default defineConfig(() => {
  return {
    base: "/react-vite",
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/main.jsx"],
    },
    resolve: {
      alias: {
        //настройка относительных путей в проекте
        // src: path.resolve(__dirname, "src"),
        // App: path.resolve(__dirname, "src/App/"),
        // components: path.resolve(__dirname, "src/App/components/"),
        // data: path.resolve(__dirname, "src/data/"),
        // icons: path.resolve(__dirname, "src/icons/"),
        // img: path.resolve(__dirname, "src/img/"),
        // scss: path.resolve(__dirname, "src/scss/"),
        // services: path.resolve(__dirname, "src/services/"),
        // style: path.resolve(__dirname, "src/style/"),
      },
      extensions: [".js", ".jsx", ".json", ".css", ".scss", ".sass"],
    },
    css: {
      postcss: {
        plugins: [
          postcssImport(),
          autoprefixer(),
          cssnano({
            preset: "default",
          }),
          combineDuplicatedSelectors({ removeDuplicatedProperties: true }), // Добавляем плагин postcss-combine-duplicated-selectors
        ],
      },
    },
    build: {
      outDir: "dist", // Директория для сборки
      assetsDir: "assets", // Директория для активов (изображений, стилей и т.д.)
      sourcemap: true,
    },
    server: {
      open: true,
    },
  };
});
