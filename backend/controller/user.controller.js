import User from "../models/user.model.js";
export const getUsersForSiderbar = async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.user._id } }).select("-password");
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error.message);
    }
}
