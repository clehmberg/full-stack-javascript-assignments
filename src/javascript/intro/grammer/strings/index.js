const greeting = 'Hello World';

const greetingArray = greeting.split('')

const begins = (str, char) => {
  return str [0] === char


}
const beginsInsensitive = (str, char) => {
  return str.toLowerCase() [0] === char.toLowerCase()
}

console.log(beginsInsensitive(greeting, 'H'))
