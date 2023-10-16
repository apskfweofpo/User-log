import express from "express"
import sequelize from "./db.js"
import cors from "cors"
import logRouter from "./Logs/logRouter.js";

const PORT = 4000
const app = express()

const corsOptions = {
    origin: "http://localhost:5000"
};

app.use(cors(corsOptions))
app.use(express.json())
app.use('/user', logRouter)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (e) {
        console.log(e)
    }
}

start()



