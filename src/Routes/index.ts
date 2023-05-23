import express from 'express';
import { getComments, getPosts } from '../controller';

export const router = express.Router();

// check if server is running
router.get('/', (req: any, res: any) => {
    res.send('Hello World');
});
// a route that retrives comments from jsonplaceholder
router.get('/comments', getComments);
// get api posts from jsonplaceholder
router.get('/posts', getPosts);

