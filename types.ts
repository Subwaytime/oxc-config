import type { PackageJson } from "type-fest";
import type { GENERATED_RULES } from "./source/1.48.0";

export interface FetchedPackageMeta {
    name: string;
    specifier: string;
    version: string;
    publishedAt: string;
    lastSynced: number;
}

export interface LocalPackageMeta {
    name: string;
    version: string;
    rootPath: string;
    packageJsonPath: string;
    packageJson: PackageJson;
}

export interface OxlintRule {
    scope: string;
    value: string;
    category: string;
    type_aware: boolean;
    fix: string;
    default: boolean;
    docs_url: string;
}

export interface DataSet {
    name: string;
    version: string;
    created_at: string;
    rules: string;
}

export interface Data extends Omit<DataSet, 'rules'> {
    rules: OxlintRule[];
}

export type ScopedOxlintRuleName<OxlintRule extends { scope: string; value: string }> =
    `${OxlintRule['scope']}/${OxlintRule['value']}`;

export type AllScopedOxlintRules<OxlintRulesArray extends readonly { scope: string; value: string }[]> = {
    [K in keyof OxlintRulesArray]: OxlintRulesArray[K] extends { scope: infer S; value: infer V }
    ? S extends string
    ? V extends string
    ? `${S}/${V}`
    : never
    : never
    : never;
}[number];

export type ScopedRules = AllScopedOxlintRules<typeof GENERATED_RULES>;
export type ValidScope = ScopedRules extends `${infer S}/${string}` ? S : never;

type RulesByScope = {
    [S in ValidScope]: Extract<ScopedRules, `${S}/${string}`>;
};

export type StrictRuleSet<Scope extends ValidScope> =
    & { [K in RulesByScope[Scope]]: [string, ...unknown[]] }
    & Record<string, never>;

type RuleReturn = string | [string, ...unknown[]] | boolean | null

export type RuleSet<Scope extends ValidScope> = {
    [K in RulesByScope[Scope]]?: RuleReturn;
};