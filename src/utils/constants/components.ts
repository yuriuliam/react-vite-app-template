/**
 * Application Constants
 */
const COMPONENTS = Object.freeze({
  NAMES: Object.freeze({
    // From Components
    BUTTON: 'Components.Button',
    HEADER: 'Components.Header',
    HEADER_LOGO: 'Components.Header.Logo',
    HEADER_RIGHT_ACTIONS: 'Components.Header.RightActions',
    HEADER_ROOT: 'Components.Header.Root',
    ICON: 'Components.Icon',
    LINK: 'Components.Link',
    PORTALS: Object.freeze({
      ROOT: 'Components.Portal',
      BODY: 'Components.Portal.Body',
      HEAD: 'Components.Portal.Head',
    }),
    ROUTE_LINK: 'Components.RouteLink',

    // From Contexts
    APP_PROVIDER: 'App.Provider',
    AUTH: 'Contexts.Auth',
    AUTH_PROVIDER: 'Contexts.AuthProvider',
    FEATURES: 'Contexts.Features',
    FEATURES_PROVIDER: 'Contexts.FeaturesProvider',
    STORE_PROVIDER: 'Contexts.StoreProvider',
    THEME_PROVIDER: 'Contexts.ThemeProvider',

    // From Internals
    CONTEXT_PROVIDER: `Internals.ContextProvider`,

    // From Layouts
    AUTH_LAYOUT: 'Layouts.Auth',
    ERROR_BOUNDARY: 'Layouts.ErrorBoundary',
    MAIN_LAYOUT: 'Layouts.Main',

    // From Pages
    HOME: 'Pages.Home',
    SIGN_IN: 'Pages.SignIn',
    SIGN_OUT: 'Pages.SignOut',

    // From Routes
    ROUTER: 'Routes.Router',
    ROUTES: 'Routes.Root',
  }),
})

export { COMPONENTS }
