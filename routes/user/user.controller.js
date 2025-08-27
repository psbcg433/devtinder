import ConnectionsMap from "../../models/connectionsMap.model.js";


class UserController {
    static async getPendingRequests(req, res) {

        try {
            const id = req.user._id;
            const requests = await ConnectionsMap.getPendingRequests(id);
            res.status(200).json({ data:requests });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getConnections(req, res) {
        try {
            const id = req.user._id;
            const connections = await ConnectionsMap.getUserConnections(id);
            res.status(200).json({ data:connections });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default UserController;