import mongoose from "mongoose";
import User from "./user.model.js";
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


connectionsMapSchema.index({ fromUserId: 1, toUserId: 1 }, { unique: true });


// This method saves the left or right swipe of a user (interested or ignored)

connectionsMapSchema.statics.saveConnection = async function (toUserId, fromUserId, status) {

    const allowedStatuses = ["ignored", "interested"];
    try {
        if (toUserId.toString() === fromUserId.toString()) {
            throw new Error("Can't send connection request to yourself");
        }
        if (!(await User.exists({ _id: toUserId })) || !(await User.exists({ _id: fromUserId }))) {
            throw new Error("BAD REQUEST: One or both users do not exist");
        }

        if (!allowedStatuses.includes(status)) {
            throw new Error("Bad Request: Status must be ignored or interested");
        }
        const existingConnection = await this.findOne({
            $or: [
                { toUserId, fromUserId },
                { toUserId: fromUserId, fromUserId: toUserId }
            ]
        });
        if (existingConnection) {
            throw new Error("Connection request already exists between these users");
        }
        const newConnection = new this({ toUserId, fromUserId, status });
        return await newConnection.save();
    } catch (error) {
        throw new Error(error.message);
    }
}



const ConnectionsMap = mongoose.model("ConnectionsMap", connectionsMapSchema);
export default ConnectionsMap;