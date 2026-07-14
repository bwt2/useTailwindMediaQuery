import pluginBabel from '@rolldown/plugin-babel'
import { reactCompilerPreset } from '@vitejs/plugin-react'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm', 'cjs'],
  platform: 'neutral',
  publint: true,
  attw: true,
  // minify: true,
  // shims: true,
  deps: {
    neverBundle: ['react', 'react-dom', /^react\//],
  },
  dts: true,
  // sourcemap: true,
  exports: {
    legacy: true,
  },
  plugins: [
    pluginBabel({
      presets: [reactCompilerPreset()],
    }),
  ],
})
