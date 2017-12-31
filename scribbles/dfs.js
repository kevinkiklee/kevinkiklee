// const hasValue = (object, value) => {
//   for (const key in object) {
//     const current = object[key]

//     if (typeof current === 'object') {
//       return hasValue(current, value)
//     } else if (current === value) {
//       return true
//     }
//   }

//   return false
// }

const hasValue = (object, value) => {
  const queue = [object]

  while (queue.length > 0) {
    const item = queue.shift()

    if (typeof item === 'object') {
      Object.keys(item).forEach(key => {
        queue.push(item[key])
      })
    } else if (item === value) {
      return true
    }
  }

  return false
}

const example = {
  first: 'abc',
  second: 'def',
  third: {
    third_a: 'ghi',
    third_b: {
      third_b_1: 'jkl'
    }
  },
  fourth: {
    fourth_a: 'mno'
  },
}

const hasJkl = hasValue(example, 'jkl')
console.log(hasJkl)
