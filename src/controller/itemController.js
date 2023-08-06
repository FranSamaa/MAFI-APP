const item =require ("../model/item")
const itemService = require ("../service/itemService")
const createItem = async function (req,res){
    console.log("creando item..")
    const Item ={
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category,
        stock:req.body.stock,
    }
    try{
        const createItem = await itemService.createItem(user);
        returnres.status(201).json({status:201,data:createItem,message:"se creo el item"})
    }catch(e){
        return res.status (400).json({status:400,message:e.message})
    }
}
module.exports ={
    createItem
}
