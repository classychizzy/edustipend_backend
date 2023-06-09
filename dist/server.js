"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const index_1 = require("./Routes/index");
const app = (0, express_1.default)();
const port = 6000; // default port to listen
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(index_1.router);
app.use('/api', index_1.router);
app.use('/api/comments', index_1.router);
app.use('/api/posts', index_1.router);
// start the express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
