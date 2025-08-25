import User from "../../models/user.model.js";



class ProfileController {
 

  static async getProfile(req, res) {
    try {
      res.status(200).json({ message: "Profile fetched", user: req.user });
    } catch (error) {
      res.status(500).json({ message: "Error fetching profile", error: error.message });
    }
  }

  static async setProfile(req, res) {
    const id = req.user._id;
    const updateData = req.body;
    try {
      const user = await User.updateUser(id, updateData);
      res.status(200).json({ message: "User updated successfully", user });
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


  static async setPassword(req, res) {
    const id = req.user._id;
    const { oldPassword, newPassword } = req.body;
    try {
      await User.updatePassword(id, oldPassword, newPassword);
      res.status(200).json({ message: "Password updated successfully" });
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


  static async deleteProfile (req, res)  {
    const  id  = req.user._id;
    try {
        const useremail = await User.deleteUser(id);
        if (!useremail) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: `Account linked to ${useremail} deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
  }

}





export default ProfileController;