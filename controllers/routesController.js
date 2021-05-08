import Route from "../models/routes.model.js";

//Add a route
export async function addroute(req, res) {
    try {
        let route = await Route.create(req.body);
        if (route) {
            res.status(200).json({
                success: true,
                message: 'route created successfully',
                data: route
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'route could not be created at this time'
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

//View a route
export async function viewroute(req, res) {
    try {
        let allroutes = await Route.findAll({ where: { route_id: req.params.id } });
        if (allroutes) {
            res.json({
                success: true,
                message: 'route records retrieved successfully',
                data: allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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

//View all routes
export async function viewAllroutes(req, res) {
    try {
        let allroutes = await Route.findAll();
        if (allroutes) {
            res.json({
                success: true,
                message: 'route records retrieved successfully',
                data: allroutes
            })
        } else {
            res.json({
                success: true,
                message: 'No route records found.',
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

//Update route record
export async function updateroute(req, res) {
    try {
        let allusers = await User.findAll();
        if (allusers) {
            res.json({
                success: true,
                message: 'user records retrieved successfully',
                data: allusers
            })
        } else {
            res.json({
                success: true,
                message: 'No Member records found.',
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

//Delete a route
export async function deleteroute(req, res) {
    try {
        let user = await User.findAll();
        if (user) {
            res.status(200).json({
                success: true,
                message: 'Member records was successfully deleted',
                data: user
            })
        } else {
            res.json({
                success: true,
                message: 'Member was not found.',
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
  