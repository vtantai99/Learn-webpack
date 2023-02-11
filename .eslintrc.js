// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript'
  ],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: 'detect'
    },
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true

  },
  parserOptions: {
    project: ['./tsconfig.json']
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'max-len': ['error', 200],
    'react/function-component-definition': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off'
  }
}
