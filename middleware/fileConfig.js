const express=require('express')
const path=require('path')
const multer=require('multer')


//storage location and filename setting
const myStorage=multer.diskStorage({
  destination:(req,file,callback) =>{
callback(null,"documents/")
  },

  filename:(req, file, callback)=>{
//original namd of the file
callback(null, `${file.originalname}`)
  }
})

//multer config
let fileConfig=multer({
  storage:myStorage,
  limits:{
    fileSize:10*1024*1024 //10Mb
  }
}).single('mfile')

//.single(filename) =>  for single files
//.array(filename) => for array of files

module.exports= fileConfig