# React Vite Template

## What's this?

This is a React Application Base/Template for big and scalable projects.

Considered a POC, the goal of this repo is to prove you can implement a distinguished clean architecture to solve real word cases with abstraction and isolation-per-concept.

## Main Features
- Modular Clean Code architecture to give full support for scalability;
- Common-case structures for caching, logging, validation and communicate with external services via HTTP;

### External Modules

- Asynchronous State Management w/ **React Query**
- Built-in React components, HOCs, hooks and other utilities
- Built-in logger w/ **Debug (Lib)** + **Chalk**
- Built-in toast system
- Built-in validators
- Chart components w/ **Apex Charts**
- Components and Design System Basis w/ **Radix Primitives** + **Radix Theme**
- Custom CSS-in-JS Styles w/ **Styled Components** + **Polished**
- Dev runtime, build and preview w/ **Vite**
- Decentralized Global State w/ **Jotai**
- Documentation and Design Workshop w/ **Storybook**
- Linting + Code Styling w/ **ESLint (with plugins)** + **Prettier**
- Tests w/ **Vitest** + **Testing Library** + **JSDom**

## Architecture

The Code-style has a functional approach, mostly inspired by Elixir and Lisp.
It is based on a Modular Architecture enhanced with Clean Code, splitting each responsibility into a new folder or file.

There are a few ones:

<table>
  <thead>
    <tr>
      <th>Folder Path</th>
      <th>Description</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th>src/@types</th>
      <th>
        Typing overrides and domain interfaces, globally available without imports.
      </th>
    </tr>
    <tr>
      <th>src/config</th>
      <th>Shared's configuration.</th>
    </tr>
    <tr>
      <th>src/containers</th>
      <th>All React Pages and Sections.</th>
    </tr>
    <tr>
      <th>src/data</th>
      <th>The Data Access Library</th>
    </tr>
    <tr>
      <th>src/infra</th>
      <th>The foundations of the logic. It holds the entire logic to let it flow better with the App.</th>
    </tr>
    <tr>
      <th>src/modules</th>
      <th>An isolated part of the architecture to implement the most abstract concepts.</th>
    </tr>
    <tr>
      <th>src/shared</th>
      <th>Shared utilities, consumed by the entirety of the App without restrictions.</th>
    </tr>
    <tr>
      <th>src/main.tsx</th>
      <th>The entrypoint of the App.</th>
    </tr>
    <tr>
      <th>__tests__</th>
      <th>All the tests related to the App.</th>
    </tr>
  </tbody>
</table>


## How to start it?

1. Ensure you have those dependencies installed:
   1. `NodeJS ^20.12.2`
   2. `PNPM ^9.0.6`
2. Run `pnpm install`
3. Make a copy of `.env` and name it `.env.local` 
4. Run `pnpm dev` to start de Application locally.

## Credits

[Yuri Uliam](http://github.com/yuriuliam) - Author & Maintainer
****