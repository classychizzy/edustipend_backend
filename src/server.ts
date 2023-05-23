import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import { router } from './Routes/index';


const app = express();
const port = 6000; // default port to listen


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());
app.use(router);

app.use('/api', router);
app.use('/api/comments', router);
app.use('/api/posts', router);
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});