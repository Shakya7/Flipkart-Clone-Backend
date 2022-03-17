const express = require("express");
const paymentController=require("../controllers/paymentController");

const router=express.Router();

router.post("/orders", paymentController.createorder);

router.post("/verify", paymentController.payFinally);

module.exports = router;