/**
 * Tells if the current environment mode matches a given one.
 */
const isMode = (mode: string) => import.meta.env.MODE === mode

export { isMode }
