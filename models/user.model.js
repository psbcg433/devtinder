import mongoose, { Schema } from "mongoose";
import { isEmail, isStrongPassword, encryptPassword, comparePassword } from "../utils/helper.js";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: [true, "First name is required"],
            minlength: [2, "First name must be at least 2 characters"],
            maxlength: [50, "First name must be at most 50 characters"],
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            validate: {
                validator: isEmail,
                message: props => `${props.value} is not a valid email!`,
            },
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            validate: {
                validator: isStrongPassword,
                message:
                    "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
            },
        },
        age: {
            type: Number,
            required: [true, "Age is required"],
            min: [20, "Age must be at least 20"],
            max: [40, "Age must be at most 40"],
        },
        gender: {
            type: String,
            enum: {
                values: ["male", "female", "others"],
                message: "Gender must be male, female, or others",
            },
            required: [true, "Gender is required"],
        },
        photoURL: {
            type: String,
            default: "",
        },
        skills: {
            type: [String],
            default: [],
            validate: {
                validator: arr => arr.length <= 5,
                message: "At max 5 skills can be added",
            },
        },
    },
    { timestamps: true }
);

userSchema.index({ firstName: 1, lastName: 1 });

// Static to check email uniqueness and register user
userSchema.statics.registerUser = async function (userData) {
    // Validate raw password BEFORE encrypting
    if (!userData.password || !isStrongPassword(userData.password)) {
        throw new Error(
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
        );
    }

    // Check email uniqueness
    const existingUser = await this.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Encrypt after validation
    userData.password = await encryptPassword(userData.password);

    // Let schema handle the rest of the validation
    const user = new this(userData);
    const savedUser = await user.save();
    const savedUserInfo = savedUser.toObject();
    delete savedUserInfo.password;
    delete savedUserInfo._id;
    delete savedUserInfo.createdAt;
    delete savedUserInfo.updatedAt;
    delete savedUserInfo.__v;
    return savedUserInfo;
};


//to check if login credentials are valid
userSchema.statics.checkLoginCredentials = async function (email, password) {

    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    const userInfo = user.toObject();
    return userInfo._id;
}


// Allowed fields for update
userSchema.statics.checkUpdatePossibility = function (updateData) {
    const allowedFields = [
        "firstName",
        "lastName",
        "age",
        "photoURL",
        "skills",
    ];
    return Object.keys(updateData).every(field =>
        allowedFields.includes(field)
    );
};

// Static to update user
userSchema.statics.updateUser = async function (id, updateData) {
    if (!this.checkUpdatePossibility(updateData)) {
        throw new Error("Update not allowed for the provided fields");
    }


    const updatedUser = await this.findByIdAndUpdate(id, updateData, {
        new: true,
        runValidators: true,
    });

    if (!updatedUser) {
        throw new Error("User not found");
    }

    const userInfo = updatedUser.toObject();
    delete userInfo._id;
    delete userInfo.__v;
    delete userInfo.createdAt;
    delete userInfo.updatedAt;
    delete userInfo.password;
    return userInfo;
};

// static method to update password
userSchema.statics.updatePassword = async function (id, oldPassword, newPassword) {

    const user = await this.findById(id);
    if (!user) {
        throw new Error("User not found");
    }
    const isOldPasswordValid = await comparePassword(oldPassword, user.password);
    if (!isOldPasswordValid) {
        throw new Error("Old password is incorrect");
    }
    if (oldPassword === newPassword) {
        throw new Error("New password must be different from the old password");
    }

    if (!isStrongPassword(newPassword)) {
        throw new Error(
            "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character."
        );
    }
    user.password = await encryptPassword(newPassword);
    await user.save();
    return true
};

userSchema.statics.deleteUser = async function(id) {
    const user = await this.findByIdAndDelete(id);
    return user.email;
};



const User = mongoose.model("User", userSchema);
export default User;
