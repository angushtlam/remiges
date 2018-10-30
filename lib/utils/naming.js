export function camelCaseToPipeCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i)

    // Make sure the character is actually a capital letter.
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      result += '-'
    }
    result += char.toLowerCase()
  }
  return result
}
