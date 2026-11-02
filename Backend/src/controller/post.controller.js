import { Post } from "../models/post.models.js";

const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({ message: "All Fields Are Required." });
    }

    const post = await Post.create({ name, description, age });

    res.status(201).json({ message: "Post created Successfully.", post: post });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    // Basic validation to check if the body is empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "No data provided for update",
      });
    }

    const post = await Post.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ message: "Post is Not Founded." });
    }

    res.status(200).json({
      message: "Post Updated Successfully",
      post,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error.", error: error.message });
  }
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) {
      return res.status(400).json({ message: "Id is Required." });
    }
    const deleted = await Post.findByIdAndDelete({ _id: id });

    if (!deleted) {
      return res.status(404).json({ message: "Post Not Found with that Id." });
    }
    res.status(200).json({
      message: "Post Deleted Successfully.",
      deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error.",
      error: error.message,
    });
  }
};

export { createPost, getPost, updatePost, deletePost };
