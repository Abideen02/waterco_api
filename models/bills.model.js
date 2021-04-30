import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Bill = sequelize.define('bills', {
    bill_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    premise_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tarrif_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName: 'bills',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "bill_id" }
        ]
    }]
});

export default Bill;