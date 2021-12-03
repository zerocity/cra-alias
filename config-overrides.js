const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");
const aliasMap = configPaths("./tsconfig.paths.json");

const withAlias = alias(aliasMap);

module.exports = function override(setEnvironment) {
  let config = setEnvironment(process.env.NODE_ENV);
  config = withAlias(config);
  return config;
};

//
// with jest alias works a bit diffrent
//
//  "@component/*": ["./component/*"],
//
//
// Dont work
// "@component": ["./component"],
// import {Foo} from "@component"
// dont work
module.exports.jest = aliasJest(aliasMap);
