import { TYPESCRIPT_RULES } from "./typescript";
import { VUE_RULES } from "./vue";

export const RULES = {
    ...TYPESCRIPT_RULES,
    ...VUE_RULES
} as const;