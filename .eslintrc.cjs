module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    module: "node"
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:react-hooks/recommended', 'plugin:testing-library/react', 'plugin:just-dom/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: true,
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh', 'testing-library', 'jest-dom'],
  rules: {
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};