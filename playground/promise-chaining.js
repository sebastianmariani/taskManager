require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('5fc23c7b6441f8e915f6d971', { age:1 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age:1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})