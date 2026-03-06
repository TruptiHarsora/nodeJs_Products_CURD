const multer = require("multer");
const path = require("path");

const MyStorage = multer.diskStorage({
    filename:(req, file, cb)=>{
      
           cb(null,Date.now() +"-"+file.originalname);
    },
    destination:(req, file,cb)=>{
       console.log("Path: ",path.join(__dirname,"..","uploads"))
        cb(null,path.join(__dirname,"..","uploads"));
    }
});

const upload = multer({storage:MyStorage});

module.exports = upload