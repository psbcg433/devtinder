class RequestController {
    
    // Send a request
    static async sendRequest(req, res) {
        try {
            // Logic to send a request
            res.status(200).json({ message: ` ${req.user}  Request sent successfully` });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    
}   

export default RequestController;