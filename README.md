# ReactJS Typescript Application Project

## Installation

```
npm install && npm install --prefix server/
```

## Run app

```
npm start
```

### Custom PORT

```
PORT=8085 npm start
```

> open browser at [http://localhost:8080](http://localhost:8080/)

### **Build staging ENV**

```terminal
npm run build-staging
```

---

## Explanation

This project provides a setup for further projects with React JS using Typescript. Webpack is the build system and there is a production and a developer mode. You will find the descriptions below.

- **[React](https://facebook.github.io/react/)** (16.x)
- **[Webpack](https://webpack.js.org/)** (4.x)
- **[Typescript](https://www.typescriptlang.org/)** (3.x)
- [Babel](http://babeljs.io/) (7.x)
- [Jest](https://facebook.github.io/jest/) - Testing framework for React applications
- Production/Staging build script
- Typescript compiling using [TS Loader](https://github.com/TypeStrong/ts-loader) (6.2.x)
- Code quality (linting) for Typescript.

## Project structure

```
- dist/
- node_modules/
- public/
- server/ # Dev server using nodejs and webpack watch
- src/
  |- assets/
    |- fonts/
    |- images/
    |- locales/
    |- favicon.png

  |- commons/ # All commons types and constants
    |- apiEndpoint.ts
    |- constants.ts
    |- cookieKey.ts
    |- environment.ts
    |- headerKeys.ts
    |- images.ts
    |- validation.ts # Common validation for Formik

  |- components/ # Global components
    |- footer/
    |- header/
    |- layout/
    |- navigator/
    |- spinner/
    |- .../

  |- configs/ # Global configs
  |- helpers/ # Helpers and Utils class/functions
  |- pages/ # All pages
    |- 404/
    |- errorBoundary/
    |- forgotPassword/
    |- home/
    |- login/

  |- providers/
    |- authProvider.ts
    |- axiosProvider.ts
    |- cookieProvider.ts

  |- redux/
    |- request/
      |- requestAction.ts
      |- requestReducer.ts
      |- requestType.ts

    |- spinner/
      |- spinnerAction.ts
      |- spinnerReducer.ts
      |- spinnerType.ts

    |- reducers.ts
    |- store.ts
    |- types.ts

  |- routers/
    |- authenticatedRoute.tsx
    |- baseRoute.tsx
    |- notFoundRoute.tsx
    |- publicRoute.tsx
    |- routeName.ts
    |- type.ts
    |- unauthenticatedRoute.tsx

  |- services/
    |- user/
      |- signIn.ts
      |- signUp.ts
      |- forgotPassword.ts

  |- themes/
    |- colors.ts
    |- index.ts
    |- styles.ts
    |- types.ts
    |- variables.ts

  |- app.tsx
  |- index.html
  |- index.tsx
- webpack/
  |- webpack.base.config.js
  |- webpack.prod.config.js

- .env.dev
- .env.staging
- .env.production
- package.json
- package-lock.json
- ...
```

## Features

- Prettier ts,tsx, js precommit
- preconfigured tslint and Prettier code formatter

**All commands**

| Command                 | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| `npm start`             | Build app continuously (HMR enabled) and serve @ `http://localhost:8080` |
| `npm run build-staging` | Build app to `/dist/`                                                    |
| `npm run build-prod`    | Build app to `/dist/`                                                    |
| `npm run test`          | Run tests                                                                |
| `npm run lint:ts`       | Run Typescript linter                                                    |

## TSX

In the `src` folder are `.tsx` and `.ts` files. Those files will be compiled by webpack into browser readable javascript files. As you can see in the webpack configuration it is `babel` which does this job.
