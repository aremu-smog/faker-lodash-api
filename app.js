const faker = require('faker')

const firstName = faker.fake("{{name.firstName}}")
const lastName = faker.fake("{{name.lastName}}")
const gender = faker.fake("{{name.gender}}")
const phoneNumber = faker.fake("{{phone.phoneNumber}}")

console.log(firstName, lastName, gender, phoneNumber)