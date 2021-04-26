import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Premises = sequelize.define('premises', {
    premise_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    meter_in: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

}, {
  sequelize,
  tableName: 'premises',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      fields: [
        { name: "premise_id" },
      ]
    },
  ]
});

export default Premises