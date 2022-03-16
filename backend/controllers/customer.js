const customer = require("../model/customerModel");

const getAllCustomer= async (req,res)=>{
    try {
    const customers= await customer.findAll();
    res.json(customers);   
    } catch (error) {
        console.log(error);    
    }
}

const getCustomer= async (req,res)=>{
    try {
    const customers= await customer.findAll({
        where:{
            id:req.params.id
        }
    });
    res.json(customers);  
    
    
    } catch (error) {
        console.log(error);    
    }
}


module.exports={
    getAllCustomer:getAllCustomer,
    getCustomer:getCustomer,

};