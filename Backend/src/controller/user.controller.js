import { User } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, Email and Password is Required." });
  }
  try {
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(400).json({ message: "User Already Exist." });
    }

    // Create User
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });

    return res.status(201).json({
      message: "User created Successfully.",
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Internal server error.`, error: error.message });
  }
};


export { registerUser};