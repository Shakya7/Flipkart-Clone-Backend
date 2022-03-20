const Razorpay = require("razorpay");
const crypto = require("crypto");
  
exports.createorder=async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.RAZORPAY_PUB_K,
			key_secret: process.env.RAZORPAY_PVT_K,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error.message);
	}
}

exports.payFinally= async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.RAZORPAY_PVT_K)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			return res.status(200).json({status: "success", message: "Payment verified successfully" });
		} else {
			return res.status(400).json({status: "fail", message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error.message);
	}
}