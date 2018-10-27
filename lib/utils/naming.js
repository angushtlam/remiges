export function camelCaseToPipeCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)
    if (char === char.toUpperCase()) {
      result += '-'
    }
    result += char.toLowerCase()
  }
  return result
}
