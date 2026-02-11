import { ACTIVE_PLUGINS } from "./constants";
import { RULES } from "./rules";

export const config = {
    plugins: ACTIVE_PLUGINS,
    rules: RULES
} as const;