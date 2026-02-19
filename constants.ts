import type { defineConfig } from 'oxlint';
import type { Simplify } from 'type-fest';
import { resolve } from 'path';

export type OxlintPlugins = NonNullable<Simplify<ReturnType<typeof defineConfig>['plugins']>>;

export const ACTIVE_PLUGINS: OxlintPlugins = [
    'eslint',
    'typescript',
    'vitest',
    'vue'
] as const;

export const PACKAGE_NAME = 'oxlint' as const;

export const SOURCE_FOLDER = resolve(__dirname, 'source');