import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import strip from "@rollup/plugin-strip";

// remove console log?

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
    sourcemap: true,
  },
  external: ["react", "react-dom"],
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        {
          targets: "> 0.25%, not dead",
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      plugins: ["@babel/plugin-transform-optional-chaining"],
    }),
    strip({
      include: ["**/*.js", "**/*.ts"],
      debugger: true,
      functions: ["console.log"],
    }),
  ],
};
