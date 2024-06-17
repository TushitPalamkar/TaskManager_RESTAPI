const mongoose=require('mongoose')
const connectionString='mongodb+srv://Tushit:tushit%40123@nodeexpressprojects.wanoc4c.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerNode'

const connectDB=(url)=>{
    return mongoose.connect(url).then(()=>console.log('Successfull')).catch((err)=>console.log(err))
}
module.exports=connectDB