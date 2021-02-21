module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "func-names": [
            "error",
            "never"
          ],
          "comma-dangle": [
            "error",
            "only-multiline"
          ],
          "semi": [
            "warn",
            "never"
          ],
          "quotes": [
            "warn",
            "double"
          ],
          "max-len": [
            "warn",
            {
              "ignoreComments": true,
              "ignoreTrailingComments": true,
              "ignoreUrls": true,
              "ignoreStrings": true,
              "ignoreTemplateLiterals": true,
              "ignoreRegExpLiterals": true
            }
          ],
          "no-console": 1,
          "no-unused-vars": 1,
          "prefer-const": 1,
          "no-var": 1,
          "eol-last": 1,
          "padded-blocks": 0,
          "import/newline-after-import": 0,
          "no-underscore-dangle": 0
    }
};
