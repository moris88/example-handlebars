import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  { files: ['src/**/*.js', 'server/**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.commonjs } },
  pluginJs.configs.recommended,
  {
    rules: {
      'no-undef': 'off',
      semi: ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      quotes: ['error', 'single'],
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-unused-vars': 'off'
    }
  },
  { ignores: ['public/', 'node_modules/'] }
]
