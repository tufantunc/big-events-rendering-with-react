const sass = require('node-sass');

module.exports = (api) => {
    api.cache(true);

    const presets = ["@babel/env", "@babel/react"];
    const plugins = ["@babel/plugin-proposal-class-properties", [
        "css-modules-transform",
        {
            "preprocessCss": (data, file) => {
                return sass.renderSync({data, file}).css.toString('utf8');
            },
            "generateScopedName": "[hash:8]",
            "extensions": [".scss"]
        }
    ]];

    return {
        presets,
        plugins
    };
}