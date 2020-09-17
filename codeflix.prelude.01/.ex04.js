function isLowerCase(char) {
    return (char >= 97 && char <= 122)
  }
  
  function capitalize(str = '', restToLower = false) {
    const result = []
    const firstCharCode = str.charCodeAt(0)

    if (isLowerCase(firstCharCode)) {
      result[0] = String.fromCharCode(firstCharCode - 32)
    }
  
    for (let i = 1; i < str.length; i++) {
      result[i] = str[i]
    }
  
    return result.join('')
  }
  
  const capitalizedString = capitalize('one Code')
  console.log(capitalizedString)