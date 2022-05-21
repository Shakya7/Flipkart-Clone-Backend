const express = require("express");
const paymentController=require("../controllers/paymentController");
const authController=require("../controllers/authController");

const router=express.Router();

router.post("/orders", paymentController.createorder);

router.post("/verify", paymentController.payFinally);
router.patch("/success",authController.protectRouteWithJWT,paymentController.paymentSuccess);

module.exports = router;