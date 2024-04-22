import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [dts()],

    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'fsm-workflow-designer',
            fileName: 'index',
            formats: ['es', 'umd', 'cjs']
        }
    }
})