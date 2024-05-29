const express =  require("express")
const router = express.Router();
const {registerUser,loginUser,sendUsername,deleteUser} = require('../Controller/userController')


router.route("/register").post(registerUser)
router.route("/login").post(loginUser);

router.route("/senduser").post(sendUsername);

router.route("/deleteuser").post(deleteUser);




module.exports = router;