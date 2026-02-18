import { defineRules } from "../utils";

export const ESLINT_RULES = defineRules('eslint', {
    "eslint/accessor-pairs": ["error",
        {
            "enforceForClassMembers": true,
            "enforceForTSTypes": false,
            "getWithoutSet": false,
            "setWithoutGet": true
        }
    ],
    "eslint/array-callback-return": ["error",
        {
            "allowImplicit": true,
            "checkForEach": false
        }
    ],
    "eslint/arrow-body-style": ["error", "as-needed",
        {
            "requireReturnForObjectLiteral": false
        }
    ],
    "eslint/block-scoped-var": "error",
    "eslint/capitalized-comments": ["error", "always"], // NOTE: Needs to be checked
    "eslint/class-methods-use-this": ["error",
        {
            "enforceForClassFields": true,
            "ignoreClassesWithImplements": null,
            "ignoreOverrideMethods": false
        }
    ],
    "eslint/complexity": ["error",
        {
            "max": 20,
            "variant": "classic"
        }
    ],
    "eslint/constructor-super": "error",
    "eslint/curly": ["error", "all"],
    "eslint/default-case": ["error",
        {
            "commentPattern": "^skip\\sdefault"
        }
    ],
    "eslint/default-case-last": "error",
    "eslint/default-param-last": "error",
    "eslint/eqeqeq": ["error", "always"], // NOTE: Needs to be checked
    "eslint/for-direction": "error",
    "eslint/func-names": ["error", "as-needed",
        {
            "generators": "as-needed"
        }
    ],
});