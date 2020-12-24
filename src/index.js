const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (file.originalname.endsWith('.pdf')) {
            return cb(new Error('Please upload PDF'))
        }

        cb(null, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5fe084b38b393084da5171d2')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5fe084a88b393084da5171d0')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)
}

main()