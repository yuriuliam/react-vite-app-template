/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_MAIN_URL: string
  readonly VITE_API_ALT_URL: string
  readonly VITE_LOCAL_STORAGE_ADAPTER_PREFIX: string
  readonly VITE_SESSION_STORAGE_ADAPTER_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
