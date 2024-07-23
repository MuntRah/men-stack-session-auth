const express = require("express");
const User = require("../models/user.js");
const router = express.Router();
router.get("/sign-up", (req, res) => {
  res.render("auth/sign-up.ejs");
});
router.post('/sign-up' , async (req , res , next)=>{
const username = req.body.username;
try{
const existingUser = await User.findOne({username})
if(existingUser){
  return res.send('Ooops Something went wrong')
}
if(password !== confirmPassword){
  return res.send('password and confirm do not match ')
}
}
catch(error){
}
})
module.exports = router;

