import { defineRules } from "../utils";

export const TYPESCRIPT_RULES = defineRules("typescript", {
    "typescript/adjacent-overload-signatures": "error",
    "typescript/array-type": ["error", { "default": "array-simple" }],
    "typescript/await-thenable": "error",
    "typescript/ban-ts-comment": ["error",
        {
            "ts-expect-error": "allow-with-description",
            "ts-ignore": true,
            "ts-nocheck": { "descriptionFormat": "^: TS\\d+ because .+$" },
            "ts-check": false,
            "minimumDescriptionLength": 3
        }
    ],
    "typescript/ban-tslint-comment": "off",
    "typescript/ban-types": "error",
    "typescript/consistent-generic-constructors": ["error", "type-annotation"],
    "typescript/consistent-indexed-object-style": "off",
    "typescript/consistent-type-definitions": ["error", "interface"],
    "typescript/consistent-type-imports": ["error",
        {
            "prefer": "type-imports",
            "fixStyle": "separate-type-imports"
        }
    ],
    "typescript/explicit-function-return-type": ["error",
        {
            "allowIIFEs": false,
            "allowExpressions": false,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true,
            "allowFunctionsWithoutTypeParameters": false,
            "allowDirectConstAssertionInArrowFunctions": true,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": false,
        }
    ],
    "typescript/explicit-module-boundary-types": ["error",
        {
            "allowOverloadFunctions": false,
            "allowHigherOrderFunctions": true,
            "allowTypedFunctionExpressions": true,
            "allowArgumentsExplicitlyTypedAsAny": false,
            "allowDirectConstAssertionInArrowFunctions": true,
        }
    ],
    "typescript/no-array-delete": "error",
    "typescript/no-base-to-string": ["error",
        {
            "checkUnknown": true,
            "ignoredTypeNames": ["Error", "RegExp", "URL", "URLSearchParams"]
        }
    ],
    "typescript/no-confusing-non-null-assertion": ["error"],
    "typescript/no-confusing-void-expression": ["error",
        {
            "ignoreVoidOperator": false,
            "ignoreArrowShorthand": false,
            "ignoreVoidReturningFunctions": false
        }
    ],
    "typescript/no-deprecated": "error",
    "typescript/no-duplicate-enum-values": "error",
    "typescript/no-duplicate-type-constituents": "error",
    "typescript/no-dynamic-delete": "error",
    "typescript/no-empty-interface": ["error",
        {
            "allowSingleExtends": true
        }
    ],
    "typescript/no-empty-object-type": ["error",
        {
            "allowInterfaces": "with-single-extends",
            "allowObjectTypes": "never",
        }
    ],
    "typescript/no-explicit-any": ["error",
        {
            "fixToUnknown": false,
            "ignoreRestArgs": false
        }
    ],
    "typescript/no-extra-non-null-assertion": "error",
    "typescript/no-extraneous-class": ["error",
        {
            "allowConstructorOnly": false,
            "allowEmpty": false,
            "allowStaticOnly": false,
            "allowWithDecorator": false,
        }
    ],
    "typescript/no-floating-promises": ["error",
        {
            "allowForKnownSafeCalls": [],
            "allowForKnownSafePromises": [],
            "checkThenables": false,
            "ignoreIIFE": false,
            "ignoreVoid": true
        }
    ],
    "typescript/no-for-in-array": "error",
    "typescript/no-implied-eval": "error",
    "typescript/no-import-type-side-effects": "error",
    "typescript/no-inferrable-types": ["error",
        {
            "ignoreParameters": false,
            "ignoreProperties": false
        }
    ],
    "typescript/no-meaningless-void-operator": ["error",
        {
            "checkNever": false
        }
    ],
    "typescript/no-misused-new": "error",
    "typescript/no-misused-promises": ["error",
        {
            "checksConditionals": true,
            "checksSpreads": true,
            "checksVoidReturn": {
                "arguments": true,
                "attributes": true,
                "inheritedMethods": true,
                "properties": true,
                "returns": true,
                "variables": true
            }
        }
    ],
    "typescript/no-misused-spread": "error",
    "typescript/no-mixed-enums": "error",
    "typescript/no-namespace": ["error",
        {
            "allowDeclarations": false,
            "allowDefinitionFiles": true
        }
    ],
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    "typescript/no-non-null-asserted-optional-chain": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/no-redundant-type-constituents": "error",
    "typescript/no-require-imports": "error",
    "typescript/no-restricted-types": "error",
    "typescript/no-this-alias": ["error",
        {
            "allowDestructuring": true
        }
    ],
    "typescript/no-unnecessary-boolean-literal-compare": ["error",
        {
            "allowComparingNullableBooleansToFalse": true,
            "allowComparingNullableBooleansToTrue": true,
            "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false
        }
    ],
    "typescript/no-unnecessary-parameter-property-assignment": "error",
    "typescript/no-unnecessary-template-expression": "error",
    "typescript/no-unnecessary-type-arguments": "error",
    "typescript/no-unnecessary-type-assertion": ["error",
        {
            "checkLiteralConstAssertions": false
        }
    ],
    "typescript/no-unnecessary-type-constraint": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-declaration-merging": "error",
    "typescript/no-unsafe-enum-comparison": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-unsafe-member-access": ["error",
        {
            "allowOptionalChaining": false
        }
    ],
    "typescript/no-unsafe-return": "error",
    "typescript/no-unsafe-type-assertion": "off", // TODO: This is pretty aggressive.
    "typescript/no-unsafe-unary-minus": "error",
    "typescript/no-useless-empty-export": "error",
    "typescript/no-var-requires": "error",
    "typescript/no-wrapper-object-types": "error",
    "typescript/non-nullable-type-assertion-style": "error",
    "typescript/only-throw-error": ["error",
        {
            "allowRethrowing": true,
            "allowThrowingAny": true,
            "allowThrowingUnknown": true
        }
    ],
    "typescript/prefer-as-const": "error",
    "typescript/prefer-enum-initializers": "error",
    "typescript/prefer-for-of": "error",
    "typescript/prefer-function-type": "error",
    "typescript/prefer-includes": "error",
    "typescript/prefer-literal-enum-member": ["error",
        {
            "allowBitwiseExpressions": false
        }
    ],
    "typescript/prefer-namespace-keyword": "error",
    "typescript/prefer-nullish-coalescing": ["error",
        {
            "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
            "ignoreBooleanCoercion": false,
            "ignoreConditionalTests": true,
            "ignoreIfStatements": false,
            "ignoreMixedLogicalExpressions": false,
            "ignorePrimitives": true,
            "ignoreTernaryTests": false
        }
    ],
    "typescript/prefer-optional-chain": ["error",
        {
            "allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing": false,
            "checkAny": true,
            "checkBigInt": true,
            "checkBoolean": true,
            "checkNumber": true,
            "checkString": true,
            "checkUnknown": true,
            "requireNullish": false
        }
    ],
    "typescript/prefer-promise-reject-errors": ["error",
        {
            "allowEmptyReject": false,
            "allowThrowingAny": false,
            "allowThrowingUnknown": false
        }
    ],
    "typescript/prefer-reduce-type-parameter": "error",
    "typescript/prefer-return-this-type": "error",
    "typescript/prefer-ts-expect-error": "error",
    "typescript/promise-function-async": ["error",
        {
            "allowAny": true,
            "checkArrowFunctions": true,
            "checkFunctionDeclarations": true,
            "checkFunctionExpressions": true,
            "checkMethodDeclarations": true
        }
    ],
    "typescript/related-getter-setter-pairs": "error",
    "typescript/require-array-sort-compare": ["error",
        {
            "ignoreStringArrays": true,
        }
    ],
    "typescript/require-await": "error",
    "typescript/restrict-plus-operands": ["error",
        {
            "allowAny": true,
            "allowBoolean": true,
            "allowNullish": true,
            "allowNumberAndString": true,
            "allowRegExp": true,
            "skipCompoundAssignments": false
        }
    ],
    "typescript/restrict-template-expressions": ["error",
        {
            "allow": [{ "from": "lib", "name": ["Error", "URL", "URLSearchParams"] }],
            "allowAny": true,
            "allowArray": false,
            "allowBoolean": true,
            "allowNever": false,
            "allowNullish": true,
            "allowNumber": true,
            "allowRegExp": true
        }
    ],
    "typescript/return-await": ["error", "always"],
    "typescript/strict-boolean-expressions": ["error",
        {
            "allowAny": false,
            "allowNullableBoolean": false,
            "allowNullableEnum": false,
            "allowNullableNumber": false,
            "allowNullableObject": true,
            "allowNullableString": false,
            "allowNumber": true,
            "allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing": false,
            "allowString": true
        }
    ],
    "typescript/switch-exhaustiveness-check": ["error",
        {
            "allowDefaultCaseForExhaustiveSwitch": true,
            "considerDefaultExhaustiveForUnions": false,
            "requireDefaultForNonUnion": false
        }
    ],
    "typescript/triple-slash-reference": ["error",
        {
            "lib": "always",
            "path": "never",
            "types": "prefer-import"
        }
    ],
    "typescript/unbound-method": ["error",
        {
            "ignoreStatic": false,
        }
    ],
    "typescript/use-unknown-in-catch-callback-variable": "error"
});
