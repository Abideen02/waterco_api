import Payment from "../models/payments.model.js";


//Capture payment
export async function capayment(req, res) {
    try {
        let payment = await Payment.create(req.body);
        if (payment) {
            res.status(200).json({
                success: true,
                message: 'Payment captured successfully',
                data: payment
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Payment could not be captured at this time'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


//View all Payments
export async function viewAllPayment(req, res) {
    try {
        let allpayment = await Payment.findAll();
        if (allpayment) {
            res.json({
                success: true,
                message: 'Payment records retrieved successfully',
                data: allpayment
            })
        } else {
            res.json({
                success: true,
                message: 'No Payment records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// view Payment by premise
export async function paymentPremise(req, res) {
    try {
        let paymentp = await Payment.findAll();
        if (paymentp) {
            res.json({
                success: true,
                message: 'Paymnent by premise records retrieved successfully',
                data: paymentp
            })
        } else {
            res.json({
                success: true,
                message: 'No payment by premise records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}