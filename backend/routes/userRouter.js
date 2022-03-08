const express=require("express");
const userController=require("../controllers/userController");
const authController=require("../controllers/authController");

const router=express.Router();

router.route("/test").post(userController.testFunct);
router.route("/").get(authController.protectRouteWithJWT, userController.getAllUsers);
router.route("/getUserByEmail").get(userController.getUser);
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);
router.route("/load-data").get(authController.getDataFromDB);
router.route("/add-to-cart").patch(authController.protectRouteWithJWT,userController.addToCart);
router.route("/update-name").patch(authController.protectRouteWithJWT, userController.changeName);
router.route("/update-email").patch(authController.protectRouteWithJWT, userController.changeEmail);
router.route("/update-mobile").patch(authController.protectRouteWithJWT, userController.changeMobile);
router.route("/add-address").patch(authController.protectRouteWithJWT,userController.addAddress);

module.exports=router;