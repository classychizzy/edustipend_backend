import https from 'https';
import {Request, Response} from 'express';



// a route that retrives comments from jsonplaceholder
export const getComments = (req:Request, res: Response) => {
    const limit = req.query['limit'] || 9; // set default limit to 9
    const apiUrl =new URL(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
    

    https.get(apiUrl, (apiRes: any) => {
        let data: any = [];
        apiRes.on('data', (chunk: string) => {
            data += chunk;
        });

        apiRes.on('end', () => {
            res.json(JSON.parse(data));
        }).on('error', (err: any) => {
            console.log(err);
            res.sendStatus(500).json({ error: 'Error occured' });
        });
    });

};

// get api posts from jsonplaceholder

export const getPosts = (req: Request, res: Response) => {
    const limit = req.query['limit'] || 9;
    const apiUrl = new URL(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    
    https.get(apiUrl, (apiRes: any) => {
        let data: any = [];
        apiRes.on('data', (chunk: string) => {
            data += chunk;
        });

        apiRes.on('end', () => {
            res.json(JSON.parse(data));
        }).on('error', (err: Error) => {
            console.log(err);
            res.sendStatus(500).json({ error: 'Error occured' });
        });
    });
};