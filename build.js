const fs = require('fs')

const text1 = "Hello, noce to meet you."
const text2 = "My name is birariro"
const text3 = "I want to have 'AirPods Max' 🎧"
const text4 = "Thank you."

fs.readFile('template.svg', 'utf-8', (error, data) => {
  if (error) {
    console.error(error)
    return
  }

  data = data.replace('{text1}', text1)
  data = data.replace('{text2}', text2)
  data = data.replace('{text3}', text3)
  data = data.replace('{text4}', text4)

  data = fs.writeFile('chat.svg', data, (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
})