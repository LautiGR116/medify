import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended,
      'plugin:@typescript-eslint/recommended', // Agregar soporte para reglas de TypeScript
      'plugin:react/recommended', // Asegurarte de que React esté configurado correctamente
    ],
    parser: '@typescript-eslint/parser', // Asegura que TypeScript sea procesado correctamente
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      jsx: true, // Asegúrate de que el parser maneje JSX
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint.plugins['@typescript-eslint'], // Plugin para reglas de TypeScript
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Puedes personalizar según tus necesidades
    },
  },
)
