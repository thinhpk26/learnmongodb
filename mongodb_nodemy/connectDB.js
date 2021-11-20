const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodemyDatabase');

const Schema = mongoose.Schema;

const account = new Schema({
// Không cần khai báo id vì mặc định id sẽ đc lưu trong đây dưới dạng _id
  username: String,
  password: String
}, {
    collection: 'test'
});

const AccountModel = mongoose.model('account', account)

// AccountModel.find({
//     username: 'thịnh'
// })
//     .then(data => {
//         console.log('data = ', data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// AccountModel.create({
//     username: 'Văn',
//     password: '12223434'
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// AccountModel.updateOne({
//     username: 'Văn'
// }, {
//     password: '12345',
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// AccountModel.updateMany({
//     username: 'Văn'
// }, {
//     password: '12345',
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// AccountModel.deleteOne({
//     username: 'Văn'
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

AccountModel.deleteMany({
    username: 'Văn'
})
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })