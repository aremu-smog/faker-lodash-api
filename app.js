const faker = require('faker')
const lodash = require('lodash')
const express = require('express')
const app = express()

const users = lodash.times(100, (n)=>{
    return{
        id: n,
        firstName: faker.fake("{{name.firstName}}"),
        lastName: faker.fake("{{name.lastName}}"),
        gender: faker.fake("{{name.gender}}"),
        phoneNumber: faker.fake("{{phone.phoneNumber}}")
    }
})

app.get('/users', (req, res)=> {
    res.send(users)
})

const PORT=222

app.listen(process.env.PORT || PORT, () => {
    console.log(`Express running on port ${PORT}`)
}
)