"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const socket = require("socket.io");
const app = express();
const httpServer = http.Server(app);
const io = socket(httpServer);
io.on('connection', function (socket) {
    console.log('a user connected');
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
//# sourceMappingURL=server.js.map