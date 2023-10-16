import {UserLog} from "../entities/user.js";

class LogService {

    async create(req, res) {
        try {
            const {action, userId, timestamp} = req.body
            const log = await UserLog.create({
                action,
                userId,
                timestamp
            })
            return res.json(log)
        } catch (e) {
            console.log(e)
        }
    }

    async getAll(req, res) {
        try {
            let {userId: userId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            if (userId) {
                return res.json(await UserLog.findAndCountAll({where: {userId}, limit, offset}))
            }
            return res.json(await UserLog.findAndCountAll({limit, offset}))
        } catch (e) {
            console.log(e)
        }
    }
}


export default new LogService()