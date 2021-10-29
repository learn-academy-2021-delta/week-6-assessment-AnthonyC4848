// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// const { sum } = require("lodash")

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("sentence", () => {
  var people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.
// const nameCap = (array) => {
//   array.map(value => {
//     return value.name.toUpperCase(0)
//   })
// }
//create a function taking in an array as an argument
const sentence = (array) => {
  //iterate through array of objects splitting the each name value into an array words
  return array.map(value => {
    const nameCap = value.name.split(" ")
    //iterate through array of words and capitalize the character at the 0 index and the rest of the word at the 1 index using substring 
    for (let i=0; i<nameCap.length; i++){
      nameCap[i] = nameCap[i].charAt(0).toUpperCase() + nameCap[i].substring(1)
    }
    //join strings together into 1 string.
    value.name = nameCap.join(" ")
    //return in string interpolation value in sentence.
    return `${value.name} is ${value.occupation}.`
    })
}
// sentence(people)



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remain", () => {
  var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remain(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remain(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})


// Expected output: [ 2, 0, -1, 0 ]

// Expected output: [ 2, 1, -1 ]



// b) Create the function that makes the test pass.
// Create a function taking in an array as an argument
const remain = (array) => {
  // iterate using filter to only return data type of number. assign variable
  const result = array.filter(value => {
    return typeof value === "number"
  })
  //iterate through new array with map and % 3 the value.
  return result.map(value => value % 3)
}
// remain(hodgepodge1)
// remain(hodgepodge2)


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("sum", () => {
  var cubeAndSum1 = [2, 3, 4]
  var cubeAndSum2 = [0, 5, 10]
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(sumNum(cubeAndSum1)).toEqual(99)
    expect(sumNum(cubeAndSum2)).toEqual(1125)
  })
})


// Expected output: 99

// Expected output: 1125



// b) Create the function that makes the test pass.
// const sumOfCubes = (array) => {
//   let sum = 0;
//   for (let i = 1; i <= array.length; i++) {
//     sum += i ** 3
//   }
//   return sum
// }
// console.log(sumOfCubes(cubeAndSum1))
// console.log(sumOfCubes(cubeAndSum2))

// Create a function that takes in an array as an argument
const sumNum = (array) => {
  //create answer as iterated array with each value cubed using Math.pow()
  const answer = array.map(value => Math.pow(value, 3))
  //return variable with .reduce to add the (previous value + current value)
  return answer.reduce((a, b) => a + b)
}
// sumNum(cubeAndSum1)
// sumNum(cubeAndSum2)