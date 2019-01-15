export default function(value) {
  const phoneNums = value.replace(/\D/g, '')
  const pattern = /(\d{0,3})(\d{0,3})(\d{0,4})/
  const match = phoneNums.match(pattern)

  let result = ''

  if (match[1]) {
    result = `${result}(${match[1]}`
  }
  if (match[2] || (match[1] && match[1].length >= 3)) {
    result = `${result}) ${match[2]}`
  }
  if (match[3] || (match[2] && match[2].length >= 3)) {
    result = `${result}-${match[3]}`
  }
  return result
}
