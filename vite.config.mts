import { defineConfig, loadEnv } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json";
export default ({ mode }) => {
  //process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    build: {
      lib: {
        // Could also be a dictionary or array of multiple entry points
        entry: "./src/index.ts",
        // the proper extensions will be added
        fileName: "index",
        name: pkg.name,
      },
      /* rollupOptions: {
        external: ["lit", "@uxland/regions"],
      }, */
      sourcemap: true,
    },
    plugins: [dts()],
  });
};
