const Item = require("../model/item");

exports.createItem = async function (itemParam){
    
    let newItem = new Item({
        name :itemParam.name,
        price:itemParam.price,
        description:itemParam.description,
        image:itemParam.image,
        category:itemParam.category,
        stock:itemParam.stock
    })
    try{
        return await newItem.save();
    }catch (e){
        console.log(e)
        throw Error ("Error para crear el item")
    }   
}
module.exports={
    createItem
} 