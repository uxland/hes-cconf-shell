import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";
export default ({ mode }) => {
  return defineConfig({
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: "./src/index.ts",
        // the proper extensions will be added
        fileName: "index",
        name: pkg.name,
      },
      sourcemap: true,
    },
    plugins: [dts()],
  });
};
