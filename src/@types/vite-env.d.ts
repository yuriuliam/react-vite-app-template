/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIN_API_URL: string
  readonly VITE_CUID_FINGERPRINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
