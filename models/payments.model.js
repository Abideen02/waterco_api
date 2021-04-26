import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Payment = sequelize.define('payment', {
    bill_id: { 
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    
    transaction_id: {
        type: Sequelize.INTEGER(12),
        allowNull: false
    },
    
    amount_paid: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

}, {
    sequelize,
    tableName: 'payments',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "bill_id" }
        ]
    }]
});

export default Payment;