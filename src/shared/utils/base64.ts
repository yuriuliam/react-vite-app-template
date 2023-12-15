const BASE64_CHARS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

/**
 * Decodes a base64 string value into a buffer.
 * @param b64Message the message to be decoded.
 * @returns The decoded buffer from that message.
 */
const base64ToBuffer = (b64Message: string) => {
  const paddingIdx = b64Message.indexOf('=')
  const parsedMessage =
    paddingIdx >= 0 ? b64Message.slice(0, paddingIdx) : b64Message

  const bufferLength = Math.floor((parsedMessage.length * 6) / 8)

  const result = new ArrayBuffer(bufferLength)
  const bytes = new Uint8Array(result)

  for (let i = 0, j = 0; i < parsedMessage.length; i += 4, j += 3) {
    const char0 = BASE64_CHARS.indexOf(parsedMessage[i])
    const char1 = BASE64_CHARS.indexOf(parsedMessage[i + 1])
    let char2 = BASE64_CHARS.indexOf(parsedMessage[i + 2])
    let char3 = BASE64_CHARS.indexOf(parsedMessage[i + 3])

    char2 = char2 !== -1 ? char2 : 0
    char3 = char3 !== -1 ? char3 : 0

    const byte0 = (char0 << 2) + ((char1 & 48) >> 4)
    const byte1 = ((char1 & 15) << 4) + ((char2 & 60) >> 2)
    const byte2 = ((char2 & 3) << 6) + char3

    bytes[j] = byte0
    bytes[j + 1] = byte1
    bytes[j + 2] = byte2
  }

  return result
}

/**
 * Encodes a buffer into a base64 string value.
 * @param buffer the buffer to be encoded.
 * @returns The encoded message from the buffer.
 */
const bufferToBase64 = (buffer: ArrayBuffer) => {
  const padding = 3 - (buffer.byteLength % 3)
  const bytes = new Uint8Array(buffer)

  let result = ''
  for (let i = 0; i < bytes.byteLength; i += 3) {
    const char0 = (bytes[i] & 252) >> 2
    const char1 = ((bytes[i] & 3) << 4) + ((bytes[i + 1] & 240) >> 4)
    const char2 = ((bytes[i + 1] & 15) << 2) + ((bytes[i + 2] & 192) >> 6)
    const char3 = bytes[i + 2] & 63

    result +=
      BASE64_CHARS[char0] +
      BASE64_CHARS[char1] +
      BASE64_CHARS[char2] +
      BASE64_CHARS[char3]
  }

  if (padding !== 3) {
    return result.slice(0, result.length - padding) + '='.repeat(padding)
  }

  return result
}

export { base64ToBuffer, bufferToBase64 }
