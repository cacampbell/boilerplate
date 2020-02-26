/* eslint-env node */
const commonjs = require("rollup-plugin-commonjs");
const vue = require("rollup-plugin-vue");

module.exports = {
    "rollup": {
      "plugins": [
          commonjs(),
          vue()
      ]
    }
  }