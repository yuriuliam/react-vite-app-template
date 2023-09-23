/**
 * Application Constants
 */
const COMPONENTS = Object.freeze({
  NAMES: Object.freeze({
    // From Components
    BUTTON: 'App.Button',
    HEADER: 'App.Header',
    HEADER_LOGO: 'App.Header.Logo',
    HEADER_RIGHT_ACTIONS: 'App.Header.RightActions',
    HEADER_ROOT: 'App.Header.Root',
    ICON: 'App.Icon',
    LINK: 'App.Link',
    PORTALS: Object.freeze({
      ROOT: 'App.Portal',
      BODY: 'App.Portal.Body',
      HEAD: 'App.Portal.Head',
    }),
    ROUTE_LINK: 'App.RouteLink',

    // From Contexts
    APP_PROVIDER: 'App.Provider',
    AUTH: 'App.Auth',
    AUTH_PROVIDER: 'App.AuthProvider',
    FEATURES: 'App.Features',
    FEATURES_PROVIDER: 'App.FeaturesProvider',
    STORE_PROVIDER: 'App.StoreProvider',
    THEME_PROVIDER: 'App.ThemeProvider',

    // From Internals
    CONTEXT_PROVIDER: `App.ContextProvider`,

    // From Layouts
    AUTH_LAYOUT: 'App.AuthLayout',
    ERROR_BOUNDARY: 'App.ErrorBoundary',
    MAIN_LAYOUT: 'App.MainLayout',

    // From Pages
    HOME: 'App.HomePage',
    SIGN_IN: 'App.SignInPage',
    SIGN_OUT: 'App.SignOutPage',

    // From Routes
    ROUTER: 'App.Router',
    ROUTES: 'App.Routes',
  }),
})

export { COMPONENTS }
