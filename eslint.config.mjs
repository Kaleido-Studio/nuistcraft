import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['node_modules', '**/node_modules/**', '.yarn', '**/.yarn/**', '.eslintrc.js', '**/.eslintrc.js/**', 'vite.config.ts', '**/vite.config.ts/**', 'dist', '**/dist/**'],
  formatters: true,
  unocss: false,
  react: true,
})
