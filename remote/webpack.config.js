
const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "remote",
  exposes: {
    './Component': './src/app/app.component.ts',
    './Core': './src/app/core/mainModule/core.module.ts',
    './MainStandAlone': './src/app/pages/main-stand-alone/main-stand-alone.component.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

moduleFederationConfig.output.publicPath = "http://localhost:4201/";
module.exports = moduleFederationConfig;
