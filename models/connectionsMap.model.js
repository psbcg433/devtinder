import mongoose from "mongoose";

const connectionsMapSchema = new mongoose.Schema(
    {
        fromUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        toUserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        status: {
            type: String,
            enum: {
                values: ["ignored", "interested", "accepted", "rejected"],
                message: "Status must be ignored, interested, accepted or rejected"
            },
            required: true
        }

    },
    {
        timestamps: true
    }

)


connectionsMapSchema.statics.saveConnection = async function (toUserId, fromUserId, status) {

    try {
        if (toUserId.toString() === fromUserId.toString()) {
            throw new Error("Can't send connection request to yourself");
        }
        const existingConnection = await this.findOne({ toUserId, fromUserId });
        if (existingConnection) {
            existingConnection.status = status;
            return await existingConnection.save();
        } else {
            const newConnection = new this({ toUserId, fromUserId, status });
            return await newConnection.save();
        }
    } catch (error) {
        throw new Error(error.message);
    }
}



const ConnectionsMap = mongoose.model("ConnectionsMap", connectionsMapSchema);
export default ConnectionsMap;