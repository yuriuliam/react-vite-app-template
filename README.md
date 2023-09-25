# React Vite Template

## What's this?

This is a React Application Base/Template for general purposes.

## How to start it

1. Ensure you have those dependencies installed:
   1. `NodeJS >= 18.17 < 19`
   2. `PNPM >= 8.7.0`
2. Run `pnpm install`
3. Make a copy of `.env.template` and name it `.env.local`
4. Run `pnpm dev` to start de application locally.

## Main Features

- Tests powered w/ **Vitest**
- App Documentation and Workshop powered w/ **Storybook**
- Global Store and State powered w/ **Jotai**
- Components and Design System Basis w/ **Radix UI** + **Radix Themes**
- Path Aliases powered w/ **Vite**
- Custom Styles powered w/ **Vite** + **Lightning CSS**
- Logger powered w/ **Debug (Lib)** and **Chalk**
- Some amazing custom React hooks w/ **ui.dev's useHooks** + **App's Custom Hooks**
- Linting + Code Styling powered w/ **ESLint (with plugins)** + **Prettier**

## Architecture

It is based on a DDD Approach, splitting every "responsibility/concern" into a new folder or file.

There are a few ones:

- **@types** -> Custom application types + Typing enhancements for other libs.
- **assets** -> Images and icons dynamically imported into the app.
- **components** -> Reusable page parts, a common pattern for *React apps*.
- **contexts** -> Assertive data layers provided for the app to use within the app.
- **hooks** -> Some code utilities used by react to execute behaviors.
- **internals** -> Lib overrides and enhancements for the app's purposes.
- **layouts** -> Reusable page structures, avoiding code duplicating patterns.
- **pages** -> Literal pages, already composed by **layouts** and enhanced with content.
- **routes** -> All the routes, divided by an URI Resource.
- **scripts** -> Code parts, injected and executed before rendering the React **App**.
- **services** -> Business and built-in layers to help with the application's environment.
- **stories** -> Responsible for dedicated application pages.
- **styles** -> Global/Main styles for the app.
- **utils** -> small built-in utilities by javascript concept domain.
- **App.tsx** -> App' base
- **main.tsx** -> App's render core + global imports and changes before React renders.

## Render Layers / Render Order

```
-> createRoot {
 // Where the App starts to render.

 -> App Provider {
  // We load the data layers.

  -> Store Provider
  -> Features Provider
  -> Theme Provider
  -> Auth Provider

  -> App Router (as Router-DOM's BrowserRouter) {
    // Then we provide the pages through routes.

    -> Router's Error Boundary
    -> Layouts (Page Layouts, Auth Layouts etc...)¹
    -> Pages (such as Home, SignIn etc)
  }
 }
}

¹: It can have 0 to x Layouts stacked.
```
