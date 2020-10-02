const ArcGISPlugin = require('@arcgis/webpack-plugin');
/**
 * Configuration items defined here will be appended to the end of the existing webpack config defined by the Angular CLI.
 * 
 * Note: devtool setting is set for fastest build time: https://webpack.js.org/configuration/devtool/
*/
module.exports = {
  plugins: [new ArcGISPlugin()],
  node: {
    process: false,
    global: false,
    fs: "empty"
  },
  devtool: 'eval'
}