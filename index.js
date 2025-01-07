const express=require('express')
require('dotenv').config()
const cors=require('cors')
const {StatusCodes}=require('http-status-codes')
const PORT=process.env.PORT

const app=express()

//configure the body parser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(cors())

app.use(express.static('./view'))

//template engine
app.set('view engine', 'ejs')
app.set('views', './view')

app.use('/', require('./route/mailRoute'))

app.all('**',async(req,res)=>{
  try {
    res.status(StatusCodes.NOT_FOUND).json({status:true, msg:`requested rooute nppt found`})
  } catch (err) {
   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status:false, msg: err.message})
  }
} )

app.listen(PORT, ()=>{
  console.log(`server is running @ http://localhost:${PORT}`)
})
