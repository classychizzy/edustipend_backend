"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPosts = exports.getComments = void 0;
const https_1 = __importDefault(require("https"));
// a route that retrives comments from jsonplaceholder
const getComments = (req, res) => {
    const limit = req.query['limit'] || 9; // set default limit to 9
    const apiUrl = new URL(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
    https_1.default.get(apiUrl, (apiRes) => {
        let data = [];
        apiRes.on('data', (chunk) => {
            data += chunk;
        });
        apiRes.on('end', () => {
            res.json(JSON.parse(data));
        }).on('error', (err) => {
            console.log(err);
            res.sendStatus(500).json({ error: 'Error occured' });
        });
    });
};
exports.getComments = getComments;
// get api posts from jsonplaceholder
const getPosts = (req, res) => {
    const limit = req.query['limit'] || 9;
    const apiUrl = new URL(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
    https_1.default.get(apiUrl, (apiRes) => {
        let data = [];
        apiRes.on('data', (chunk) => {
            data += chunk;
        });
        apiRes.on('end', () => {
            res.json(JSON.parse(data));
        }).on('error', (err) => {
            console.log(err);
            res.sendStatus(500).json({ error: 'Error occured' });
        });
    });
};
exports.getPosts = getPosts;
