const BYTE_MAX_VALUE = 255

/**
 * Converts an ArrayBuffer into a Hexadecimal code.
 * @param buffer The buffer to be converted.
 * @returns A new Hexadecimal string from buffer.
 */
const bufferToHex = (buffer: ArrayBuffer) =>
  Array.from(new Uint8Array(buffer)).reduce(
    (acc, cur) => acc + cur.toString(16).padStart(2, '0'),
    '',
  )

/**
 * Hashes a string value into an 8-digit hexadecimal value in a
 * deterministic way.
 * @param value the value to be hashed.
 * @returns A hash for the given value.
 */
const hash = (value: string) =>
  BigInt.asUintN(
    64,
    Array.from(value).reduce(
      (acc, char) =>
        BigInt.asUintN(64, acc ** 6n - acc + BigInt(char.charCodeAt(0))),
      0n,
    ),
  )
    .toString(16)
    .padStart(16, '0')

/**
 * Creates a random buffer from a given length.
 * @param bufferLength The length of the resultant buffer.
 * @returns A random-generated buffer.
 */
const randomBytes = (bufferLength: number) =>
  Uint8Array.from(new Array(bufferLength).fill(BYTE_MAX_VALUE + 1), v =>
    Math.floor(Math.random() * v),
  ).buffer as ArrayBuffer

/**
 * Generates a random number, meant to be used as a seed.
 * @returns a random generated number.
 */
const randomSeed = () => parseInt(bufferToHex(randomBytes(6)), 16)

export { bufferToHex, hash, randomBytes, randomSeed }
