import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import config from '@rocketseat/eslint-config/react.mjs'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  ...config,
  ...compat.config({
    extends: ['eslint:recommended', 'next'],
  }),
]

export default eslintConfig
