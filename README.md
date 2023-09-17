# React Vite Template

## What's this?

This is a React Application Base/Template for general purposes.

## How to start it

1. Ensure you have those dependencies installed:
   1. `NodeJS >= 18.17 < 19`
   2. `PNPM >= 8.7.0`
2. Run `pnpm install`
3. Make a copy of `.env.template` and name it `.env.local`

#### Current Status: W.I.P.

## Main Features

- Tests w/ **Vitest**
- Global Store and Global State w/ **Jotai**
- Components and Design System Bases w/ **Radix UI** + **Radix Themes**
- Custom Styles Powered w/ **Vite** + **Lightning CSS**
- Logger Service powered w/ **Debug (Lib)** and **Chalk**
- Some amazing React Hooks powered w/ **ui.dev's useHooks** + **App's Custom Hooks**
- Linting + Styling w/ **ESLint (with plugins)** + **Prettier**

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
    -> Pages (then components, hooks etc...)
  }
 }
}

¹: It can have 0 to x Layouts stacked.
```
