import { defineConfig } from "@vue/cli-service";

export default defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify"),
        "assert": require.resolve("assert"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util"),
        "process": require.resolve("process"),
      },
    },
  },
});
