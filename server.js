const express = require ('express');
const app = express();
const multer =require('multer');
const mimeTypes = require('mime-types');

app.get("/",(req,res)=>{
   // res.send("Hola Mundo de Node JS")
   console.log("Directorio del Proyecto" + __dirname);
   res.sendFile(__dirname + "/views/index.html");
})

const storage = multer.diskStorage({
   destination:'uploads',
   filename: function (req, file, cb){
     // cb("",Date.now()+".jpg")
     //cb("",Date.now()+"."+ mineTypes.extension(file.mimetype))
     cb("",Date.now()+file.originalname+"."+ mimeTypes.extension(file.mimetype))
   }
})
   
const upload = multer ({   
   //dest:'uploads/'
   storage: storage
})

app.listen(3030, ()=> console.log("Servidor Iniciado...!"));  

app.post("/files",upload.single('avatar'),(req,res)=>{
   res.send("Archivo subido correctamente... !!!");
})