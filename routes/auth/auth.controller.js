import User from '../../models/user.model.js'
import { generateToken } from '../../utils/helper.js';

class AuthController {
    // Register a new user
    static async register(req, res) {
        try {
            const user = await User.registerUser(req.body);
            res.status(201).json({ message: "User registered", user});
        } catch (error) {
            if (error.name === "ValidationError") {
                const errors = {};
                for (let field in error.errors) {
                    errors[field] = error.errors[field].message;
                }
                return res.status(400).json({ errors });
            }
            res.status(400).json({ error: error.message });
        }
    }
    // Login user
    static async login(req, res) {
        const { email, password } = req.body;
        try {
            const userId = await User.checkLoginCredentials(email, password);
            const token = generateToken(userId);
            res.cookie("token", token);
            res.status(200).json({ message: "Login successful"});
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    // Logout user
    static async logout(req, res) {
        try {
            res.clearCookie("token");
            res.status(200).json({ message: `${req.user.firstName} ${req.user.lastName} has been logged out succesfully` });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default AuthController;


