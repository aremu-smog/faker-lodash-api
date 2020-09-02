const faker = require('faker')
const lodash = require('lodash')

const users = lodash.times(100, (n)=>{
    return{
        id: n,
        firstName: faker.fake("{{name.firstName}}"),
        lastName: faker.fake("{{name.lastName}}"),
        gender: faker.fake("{{name.gender}}"),
        phoneNumber: faker.fake("{{phone.phoneNumber}}")
    }
})


console.log(users)