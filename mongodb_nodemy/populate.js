const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/nodemyDatabase')

const schema = mongoose.Schema

const accounts = new schema({
    username: String,
    age: Number,
    salary: Number,
    course: {
        type: String,
        ref: 'course'
    },
    card: {
        type: String,
        ref: 'card'
    },
    listCourse: {
        course: {
            type: String,
            ref: 'course'
        }
    }
}, {
    collection: 'accounts'
})

const course = new schema({
    username: String,
    name: String,
    teacher: {
        type: String,
        ref: 'account',
    },
    course: [],
    cost: {},
}, {
    collection: 'course'
})

const cardSchema = new schema({
    username: String,
    numberCard: String,
    color: String,
    surplus: Number,
}, {
    collection: 'card'
})

const AccountsModel = mongoose.model('account', accounts)
const CourseModel = mongoose.model('course', course)
const CardModel = mongoose.model('card', cardSchema)

// CourseModel.find({})
//     .then(dataCou => {
//         dataCou.forEach(course => {
//             AccountsModel.updateOne({
//                 username: course.username
//             }, {
//                 course: course._id
//             })
//             .then()
//             .catch(err => {
//                 console.log(err)
//             })
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })

// ----- populate normal------
// CardModel.find({})
//     .then(data => {
//         return data.forEach(item => {
//             AccountsModel.updateOne({
//                 username: item.username,
//             }, {
//                 card: item._id
//             })
//         })
//     })
//     .then(data => {
//         return AccountsModel.find({})
//             .populate('course')
//             .populate('card')
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// ----- populate parent ------
// AccountsModel.find({})
//     .then(data => {
//         data.forEach(item => {
//             CourseModel.updateOne({
//                 username: item.username,
//             }, {
//                 teacher: item._id,
//             })
//                 .then(data => {
//                     AccountsModel.find({})
//                         .populate('course')
//                         .populate({
//                             path: 'course',
//                             populate: {path: 'teacher'}
//                         })
//                         .then(data => {
//                             console.log(data)
//                         })
//                         .catch(err => {
//                             console.log(err)
//                         })
//                 })
//                 .catch(err => {
//                     console.log(err)
//                 })
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })

// --- populate nest ------
// AccountsModel.find({})
//     .populate('listCourse.course')
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(err)
//     })