import { Users } from "../models/UserModel.js";

// GET users
export const getUsers = async (req, res) => {
  try {
    const users = await Users.find({});
    return res.status(200).json({ count: users.length, data: users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// CREATE user
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Please fill all fields properly" });
    }

    const user = await Users.create({ name, email });
    return res.status(200).json({ message: "created sucessfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// GET a user
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    return res.status(200).json({ message: "Success!", data: user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// UPDATE user
export const updateUser = async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    if (!name || !email) {
      return res
        .status(400)
        .json({ message: "Please fill all fields properly" });
    }

    const user = await Users.findByIdAndUpdate(id, { name, email });
    return res.status(200).json({ message: "Success!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findByIdAndDelete(id);
    return res.status(200).json({ message: "Success!" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};
