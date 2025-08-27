import ConnectionsMap from "../../models/connectionsMap.model.js";


class UserController {
    static async getPendingRequests(req, res) {
        const id = req.user._id;
        try {
            const requests = await ConnectionsMap.getPendingRequests(id);
            res.status(200).json({ requests });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default UserController;