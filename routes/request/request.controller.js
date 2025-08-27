import ConnectionsMap from "../../models/connectionsMap.model.js";

class RequestController {

    // Send a request
    static async sendRequest(req, res) {
        try {
            const fromUserId = req.user._id;
            const { toUserId, status } = req.params;
            await ConnectionsMap.saveConnection(toUserId, fromUserId, status)
            res.status(200).json({ message: `Request successfully: ${status}` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static async reviewRequest(req,res) {
        try{
            const {status,requestId} = req.params;
            const userId = req.user._id;
            await ConnectionsMap.reviewConnection(status,requestId,userId);
            res.status(200).json({ message: `Connection Request: ${status}` });
        }
        catch(error)
        {
            res.status(400).json({ error: error.message });
        }
    }


}

export default RequestController;