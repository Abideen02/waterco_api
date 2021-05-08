import Bill from "../models/bills.model.js";


//Capture reading
export async function capturebill(req, res) {
    try {
        let bill = await Bill.create(req.body);
        if (bill) {
            res.status(200).json({
                success: true,
                message: 'Bill captured successfully',
                data: bill
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Bill could not be found at this time'
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

//View a bill
export async function viewbill(req, res) {
    try {
        let abill = await Bill.findAll({where: {bill_id: req.params.id}});
        if (abill) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: abill
            })
        } else {
            res.json({
                success: true,
                message: 'No Bill records found.',
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

// view bill
export async function viewAllBills(req, res) {
    try {
        let allBills = await Bill.findAll();
        if (allBills) {
            res.json({
                success: true,
                message: 'Bill records retrieved successfully',
                data: allBills
            })
        } else {
            res.json({
                success: true,
                message: 'No bill records found.',
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