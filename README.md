# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## GitHub Pages Deploy Config

```
npm install gh-pages --save-dev
```

package.json

```json
  "homepage": "https://ielkina.github.io/react-vite/",
  "scripts": {
    "build": "vite build",
    "pre deploy": "npm run build",
    "deploy": "npm run build gh-pages -d dist"
  }
```

vite.config.js

```js
export default defineConfig({
  base: "/YOUR_REPOSITORY_NAME/",
  plugins: [react()],
});
```

```
npm run deploy
```

В main.tsx в компонет HistoryRouter добавить пропс basename = ' передаем путь относительно которого будет строиться маршрутизацияя /react-vite '