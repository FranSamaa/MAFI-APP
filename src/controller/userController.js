const user = require("../model/user")
const userService = require ("../service/userService")
const createUser =async function (req,res){
    console.log("Creando usuario..")
    const User = {
        firstName : req.body.firstName,
        lastName :req.body.lastName,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password

    }
    try{
        const createUser = await userService.createUser (User);
        return res.status(201).json({status:201,data:createUser,message:"se creo el usuario"})
    }catch(e){
        return res.status (400).json({status:400,message:e.message})
    }
}

module.exports ={
    createUser
}
