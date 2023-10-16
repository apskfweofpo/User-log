import {Sequelize} from "sequelize"

export default new Sequelize(
    "log_users",
    "postgres",
    "carrynum1",
    {
        dialect: "postgres",
        host: "localhost",
        port: "5432"
    }
)