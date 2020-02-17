module.exports = {
    extends: [
        "@hurriyet/eslint-config-hurriyet",
        "plugin:react/recommended"
    ],
    settings: {
        react: {
            version: require('./package.json').dependencies.react,
        },
    },
};