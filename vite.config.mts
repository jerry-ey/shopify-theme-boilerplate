import fg from 'fast-glob';
import { defineConfig } from 'vite';

export default defineConfig(({ command, mode }) => ({
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    minify: false,
    rollupOptions: {
      input: fg.sync(['src/*.{ts,js}', '!src/*.d.ts']),
      output: {
        dir: 'assets',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].chunk.js',
        assetFileNames: '[name].[ext]',
      },
      plugins: [
        {
          name: 'glob-input',
          options(options) {
            const inputs =
              typeof options.input === 'string'
                ? [options.input]
                : options.input;

            return Array.isArray(inputs)
              ? { ...options, input: inputs.flatMap((input) => fg.sync(input)) }
              : null;
          },
        },
      ],
    },
  },
  plugins: [],
}));
