const BYTE_MAX_VALUE = 255
const BIGINT_512_BITS = 2n ** 512n - 1n

/**
 * Converts an ArrayBuffer into a Hexadecimal code.
 */
const bufferToHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer)).reduce(
    (acc, cur) => acc + cur.toString(16).padStart(2, '0'),
    '',
  )

/**
 * Hashes a string value into an 16-digit hexadecimal value in a
 * deterministic way.
 */
const hash = (value: string) =>
  Array.from(value)
    .reduce(
      (acc, char) =>
        ((acc << 6n) - acc + BigInt(char.charCodeAt(0))) % BIGINT_512_BITS,
      0n,
    )
    .toString(16)
    .padStart(128, '0')

/**
 * Creates a random buffer from a given length.
 */
const randomBytes = (bufferLength: number) =>
  Uint8Array.from(new Array(bufferLength).fill(BYTE_MAX_VALUE + 1), v =>
    Math.floor(Math.random() * v),
  ).buffer as ArrayBuffer

/**
 * Generates a random number, meant to be used as a seed.
 */
const randomSeed = () => parseInt(bufferToHex(randomBytes(6)), 16)

export { bufferToHex, hash, randomBytes, randomSeed }
