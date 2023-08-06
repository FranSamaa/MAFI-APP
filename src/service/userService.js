const userRepository= require("../model/user")

exports.createUser = async function (user){
    let newUser = new userRepository ({
        firstName :user.firstName,
        lastName :user.lastName,
        age: user.age,
        email:user.email,
        password : user.password
    })
    return await newUser.save();  
}

