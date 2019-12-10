module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: 3
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ];
  const plugins = [
    [
      "babel-plugin-styled-components",
      {
        displayName: false
      }
    ],
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ];

  return {
    presets,
    plugins
  };
};
