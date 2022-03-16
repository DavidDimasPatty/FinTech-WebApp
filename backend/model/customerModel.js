const sequelize=require('sequelize');
const db=require("../dbconfig.js")

const {DataTypes}=sequelize;

const customer=db.define('customer',{
    name:{
        type:DataTypes.STRING
    }, 
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    birth:{
        type:DataTypes.DATE
    },
    country:{
        type:DataTypes.STRING
    }

},{
    freezeTableName:true
});

module.exports=customer;