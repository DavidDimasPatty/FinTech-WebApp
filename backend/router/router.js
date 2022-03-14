const express=require("express");
const router=express.Router();
const user=require("../controllers/user.js")

router.get('/user',user.getAllUser);
//router.get('/category',category.getAllCategory);
//router.get('/:id',quiz.getIdQuiz);
//router.get('/quest/:id_category',category.getSomeQuiz);
//router.post('/create',quiz.createQuiz);
//router.patch('/:id',quiz.updateQuiz);
//router.delete('/:id',quiz.deleteQuiz);
    
module.exports=router;