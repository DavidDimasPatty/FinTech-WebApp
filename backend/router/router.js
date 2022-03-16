const express=require("express");
const router=express.Router();
const user=require("../controllers/user.js")
const customer=require("../controllers/customer.js")

router.post('/user',user.login);
router.post('/usercheck',user.checkusername);
router.get('/customerlist',customer.getAllCustomer);
router.get('/profile/:id',customer.getCustomer);
//router.get('/quest/:id_category',category.getSomeQuiz);
router.post('/create',user.createUser);
//router.patch('/:id',quiz.updateQuiz);
//router.delete('/:id',quiz.deleteQuiz);
    
module.exports=router;