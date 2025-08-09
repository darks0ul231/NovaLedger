module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked', // Use -type-checked variant
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true, // Enable type-aware linting
    tsconfigRootDir: __dirname,
    warnOnUnsupportedTypeScriptVersion: false
  },
  
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
    '@typescript-eslint/no-misused-promises': 'warn',
    '@typescript-eslint/no-floating-promises': 'warn',
    'prettier/prettier': 'warn'
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js', '**/*.config.js']
};