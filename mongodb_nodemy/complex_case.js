const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodemyDatabase')

const schema = mongoose.Schema

const account = new schema({
    username: String,
    password: String,
    age: Number,
    phone: String,
    salary: Number
}, {
    collection: 'account'
})

const AccountModel = mongoose.model('account', account)

// AccountModel.create({
//     username: 'student1',
//     password: '123',
//     age: 18,
//     phone: '0987',
//     salary: 1200,
// }, {
//     username: 'student2',
//     password: '1234',
//     age: 19,
//     phone: '09875',
//     salary: 1300,
// }, {
//     username: 'student3',
//     password: '12345',
//     age: 20,
//     phone: '0987',
//     salary: 2100,
// }, {
//     username: 'student4',
//     password: '123',
//     age: 15,
//     phone: '09874',
//     salary: 3200,
// }, {
//     username: 'student5',
//     password: '123456',
//     age: 14,
//     phone: '098778',
//     salary: 2800,
// },)
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

AccountModel.find({
    // $or: [{ age: { $gte: 18 }, salary: { $lte: 2100 } }]
    // salary: { $in: [2100, 1000, 1500] }
    // username: /student /
})
    // .sort('salary')
    // .skip(2)
    // .limit(3)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })