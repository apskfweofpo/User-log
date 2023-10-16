import {DataTypes} from "sequelize"
import sequelize from "../db.js"


export const UserLog = sequelize.define('user_log', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    action: {type: DataTypes.STRING},
    userId: {type: DataTypes.INTEGER, unique: false,},
    timestamp: {type: DataTypes.DATE, unique: false},
})