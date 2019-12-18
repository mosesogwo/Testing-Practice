const arrayAnalysis = array => {
  return {
    "average": (array.reduce((acc, x) => acc + x, 0))/array.length,
    "min": Math.min(...array),
    "max": Math.max(...array),
    "length": array.length
  }
}

export default arrayAnalysis;