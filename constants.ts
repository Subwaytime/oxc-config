import type { defineConfig } from 'oxlint';
import type { Simplify } from 'type-fest';
import { resolve } from 'path';

type OxlintPlugins = NonNullable<Simplify<ReturnType<typeof defineConfig>['plugins']>>;

export const ACTIVE_PLUGINS: OxlintPlugins = [
    'eslint',
    'typescript',
    'vitest',
    'vue'
] as const;

export const PACKAGE = 'oxlint' as const;

export const FOLDER_GENERATED = resolve(__dirname, 'generated');