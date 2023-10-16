import {Sequelize} from "sequelize"

export default new Sequelize(
    "log_users",
    "postgres",
    "pass",
    {
        dialect: "postgres",
        host: "localhost",
        port: "5432"
    }
)
