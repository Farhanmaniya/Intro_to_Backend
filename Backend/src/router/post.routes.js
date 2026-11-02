import { Router } from 'express';
import { createPost, deletePost, getPost, updatePost } from '../controller/post.controller.js';

const postRouter = Router();

postRouter.post('/create', createPost);
postRouter.get('/all', getPost);
postRouter.patch('/:id', updatePost);
postRouter.delete('/:id', deletePost);

export default postRouter;