const express=require("express")
const multer=require("multer")
const upload=multer()
const router=express.Router();


router.post("/upload",upload.single("keyFile"),(req,res,next)=>{
    console.log(req.file)
})
module.exports=router;