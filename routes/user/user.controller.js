import ConnectionsMap from "../../models/connectionsMap.model.js";


class UserController {
    static async getPendingRequests(req, res) {

        try {
            const id = req.user._id;
            const requests = await ConnectionsMap.getPendingRequests(id);
            res.status(200).json({ data: requests });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    static async getConnections(req, res) {
        try {
            const id = req.user._id;
            const connections = await ConnectionsMap.getUserConnections(id);
            res.status(200).json({ data: connections });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async getFeed(req, res) {
        try {
            const id = req.user._id;
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;
            const skip = (page - 1) * limit;

            const feedData = await ConnectionsMap.getUserFeed(id,skip,limit);
            res.status(200).json({ data: feedData });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default UserController;