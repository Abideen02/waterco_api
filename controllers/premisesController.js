import Premises from "../models/Premises.model.js";

// Add a premise
export async function addPremise(req, res) {
    try {
        let premise = await Premises.create(req.body);
        if (premise) {
            res.status(200).json({
                success: true,
                message: 'Premise created successfully',
                data: premise
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Premise could not be created at this time'
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

// View a premise
export async function viewPremise(req, res) {
    try {
        let allpremises = await Premises.findAll({ where: { premise_id: req.params.id } });
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premise retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No premise found.',
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

// View all premises
export async function viewAllPremises(req, res) {
    try {
        let allpremises = await Premises.findAll();
        if (allpremises) {
            res.json({
                success: true,
                message: 'Premise retrieved successfully',
                data: allpremises
            })
        } else {
            res.json({
                success: true,
                message: 'No Premise records found.',
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

// Update premise
export async function updatePremise(req, res) {
    try {
        let updatep = await Premises.update(req.body);
        if (updatep) {
            res.status(200).json({
                success: true,
                message: 'Premise updated successfully',
                data: updatep
            })
        } else {
            res.json({
                success: true,
                message: 'Premise not found.',
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

// View Member Premises
export async function viewMemberPremises(req, res) {
    try {
        let premember = await Premises.findAll({ where: { premise_id: req.params.id } });
        if (premember) {
            res.json({
                success: true,
                message: 'Member premise retrieved successfully',
                data: Premember
            })
        } else {
            res.json({
                success: true,
                message: 'No Member premise found.',
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