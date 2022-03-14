const sequelize=require('sequelize');
const db=require("../dbconfig.js")

const {DataTypes}=sequelize;

const quiz=db.define('user',{
    username:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    }

},{
    freezeTableName:true
});

module.exports=quiz;