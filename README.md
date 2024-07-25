# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Ready-made version on hosting

URL
- [site](https://news-f3724.web.app/)

## Running the Project

To get started with the project, follow these steps:

- Install Dependencies:

```js
  npm install
```


Configure Environment Variables:
- Create a .env file in the root directory with the following content:
- VITE_NEWS_API_KEY=your_api_key_here
- VITE_NEWS_BASE_API_URL=https://api.currentsapi.services/v1/
- Register on the [site](https://currentsapi.services/) and get your_api_key_here


Run the Project:
- You can start the development server using one of the following commands:

```js
./bin/run.sh

  or

npm run dev
```
Don't forget to replace your_api_key_here with your actual API key. If you need any further assistance, feel free to ask!
