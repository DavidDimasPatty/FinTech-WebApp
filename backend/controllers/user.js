const user = require("../model/userModel.js");

const getAllUser= async (req,res)=>{
    try {
    const users= await user.findAll();
    res.json(users);   
    } catch (error) {
        console.log(error);    
    }
}

const getIdUser= async (req,res)=>{
    try {
    const users= await user.findAll({
        where:{
            username:req.params.username,
            password:req.params.password
        }
    });
    res.json(users[0]);   
    } catch (error) {
        console.log(error);    
    }
}

const createUser= async (req,res)=>{
    try {
    await user.create(req.body);
    res.json({
        "message":"Quiz Created"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

const updateUser= async (req,res)=>{
    try {
    await user.update(req.body,{
        where:{
            id:req.params.id
        }

    });
    res.json({
        "message":"User Updated"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

const deleteUser= async (req,res)=>{
    try {
    await user.destroy({
        where:{
            id:req.params.id
        }

    });
    res.json({
        "message":"User Deleted"
    })
       
    } catch (error) {
        console.log(error);    
    }
}

module.exports={
    getAllUser:getAllUser,
    createUser:createUser,
    getIdUser:getIdUser,
    updateUser:updateUser,
    deleteUser:deleteUser
};