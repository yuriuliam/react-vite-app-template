# React Vite Template

## What's this?

This is a React Application Base/Template for general purposes, based on study-cases to bring more reliability to one of my customers when creating new apps.

There are some details which was considered here and reflects most big projects:
- app-exclusive algorithms to support edgy cases for the solution;
- scalability-view of the project, trying to 

## How to start it

1. Ensure you have those dependencies installed:
   1. `NodeJS >= 20.10 < 21`
   2. `PNPM >= 8.7.5`
2. Run `pnpm install`
3. Make a copy of `.env` and name it `.env.local`
4. Run `pnpm dev` to start de application locally.

## Main Features

- Dynamic imports to support code-splitting when building to prod;
- Clean Code architecture to support scalability;
- Common-case structures for caching, logging, validation and communicate with external services via HTTP;

### External Modules

- Tests powered w/ **Vitest**
- App Documentation and Workshop powered w/ **Storybook**
- Global State powered w/ **Jotai**
- Components and Design System Basis w/ **Radix UI** + **Radix Themes**
- Path Aliases powered w/ **Vite**
- Custom CSS-in-JS Styles powered w/ **Vite** + **Styled Components**
- Logger powered w/ **Debug (Lib)** and **Chalk**
- Some amazing custom React hooks and utilities w/ **App's hooks and utils**
- Linting + Code Styling powered w/ **ESLint (with plugins)** + **Prettier**

## Architecture

The Code-style has a functional approach, mostly inspired by Elixir and Lisp.
It is based on a Clean Approach, splitting each responsibility into a new folder or file.

There are a few ones:

- **@types**: Responsible for declaring the typings used by our application. Sometimes overriding or enhancing the already existing ones.
- **configs**: All the possible configurations - such as Constants and Client Defaults - used by the app - not considering `.env` variables.
- **containers**: Our interface/render layers, split by groups of responsibilities - usually pages.
- **data**: Declaration of our protocols and infrastructure basis.
- **infra**: Implementation of our protocols and infrastructure declarations.
- **modules**: App Features and Responsibilities, split by concerns.
- **shared**: Utilities, and general-use errors, models and functions which can be consumed by the whole app.
- **main.tsx**: Entrypoint of our app.

## Credits

[Yuri Uliam](http://github.com/yuriuliam) - Author & Maintainer
****