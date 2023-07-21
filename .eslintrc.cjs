module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": "airbnb-base",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["jest"],
    "rules": {
        "no-console": "off",
        "import/extensions": [2, {
            "js": "always"
        }]
    }
}
