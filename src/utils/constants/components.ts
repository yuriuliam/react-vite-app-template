/**
 * Application Constants
 */
const COMPONENTS = Object.freeze({
  NAMES: Object.freeze({
    // From Components
    BUTTON: 'Components.Button',
    GLOBAL_STYLES: 'Components.GlobalStyles',
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
    AUTH: 'AuthContext',
    FEATURES: 'FeaturesContext',
    APP_PROVIDER: 'App.Provider',

    AUTH_PROVIDER: 'Contexts.AuthProvider',
    FEATURES_PROVIDER: 'Contexts.FeaturesProvider',
    STORE_PROVIDER: 'Contexts.StoreProvider',
    THEME_PROVIDER: 'Contexts.ThemeProvider',

    // From  Guards
    AUTH_GUARD: 'Guards.Auth',
    ERROR_GUARD: 'Guards.Error',

    // From Internals
    CONTEXT_PROVIDER: `Internals.ContextProvider`,

    // From Layouts
    MAIN_LAYOUT: 'Layouts.Main',

    // From Pages
    HOME_PAGE: 'Pages.Home',
    SIGN_IN_PAGE: 'Pages.SignIn',
    SIGN_OUT_PAGE: 'Pages.SignOut',

    // From Routes
    ROUTER: 'Routes.Router',
    ROUTES: 'Routes.Root',
  }),
})

export { COMPONENTS }
