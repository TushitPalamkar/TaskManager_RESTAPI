require('./db/connect')
const express=require('express')
const app=express()
const tasks=require('./routes/tasks')
const connectDB=require('./db/connect')
const port=3000
require('dotenv').config()
app.use(express.json())
app.get('/hello',(req,res)=>{
    res.send('Task Manager')
})


app.use('/api/v1/tasks',tasks)
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Server is listening on port ${port}.........`))
    }
    catch(err)
    {
        console.log(err)
    }
}
start()

