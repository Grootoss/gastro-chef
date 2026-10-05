/** @type {import("stylelint").Config} */
export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**", "node_modules/**"],
  rules: {
    "selector-class-pattern": null,
    "custom-property-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["webkit-scrollbar"],
      },
    ],
    "property-no-vendor-prefix": null,
    "value-no-vendor-prefix": null,
    "media-feature-range-notation": null,
    "alpha-value-notation": "number",
    "color-function-notation": null,
    "color-function-alias-notation": null,
    "declaration-block-no-redundant-longhand-properties": null,
    "no-descending-specificity": null,
    "declaration-no-important": null,
    "property-no-deprecated": null,
    "value-keyword-case": null,
    "font-family-name-quotes": "always-where-recommended",
  },
};
