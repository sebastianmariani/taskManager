require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5fc4ec78bb464d2ee10cf541').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})