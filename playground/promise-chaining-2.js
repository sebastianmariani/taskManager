require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fc4ec78bb464d2ee10cf541').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('5fc4ec6fbb464d2ee10cf540').then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})