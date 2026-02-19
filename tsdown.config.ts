import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: [
        './index.ts',
        '!./cli'
    ],
    minify: true,
    format: 'esm',
    dts: true,
})