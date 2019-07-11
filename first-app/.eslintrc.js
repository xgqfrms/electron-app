module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // "eslint:recommended",
        "plugin:vue/recommended",
    ],
    rules: {
        // override/add rules settings here, such as:
        "vue/no-unused-vars": "error",
        "indent": ["off", 4],
        "vue/order-in-components": "off",
        "vue/html-indent": "off",
        "vue/html-closing-bracket-spacing": "off",
        "vue/html-closing-bracket-newline": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-self-closing": "off",
        "vue/attributes-order": "off",
        "vue/attribute-hyphenation": "off",
        "vue/max-attributes-per-line": "off",
        "vue/mustache-interpolation-spacing": "off",
        "vue/name-property-casing": "off",
    },
}
