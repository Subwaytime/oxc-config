import { defineConfig } from 'oxlint';
import { config } from './index';

export default defineConfig({
    plugins: config.plugins,
    rules: config.rules
});