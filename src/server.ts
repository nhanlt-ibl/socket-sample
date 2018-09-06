import * as express from 'express';
import { Server } from 'http';
import * as socket from 'socket.io';

const app = express()
const httpServer = new Server(app)
const io = socket(httpServer)
io.of('/649').on('connection', (socket) => {
    console.log("client-connect", socket.id)
    socket.emit('asdfadf')
    socket.on('')
})
io.of('/545').on('connection', (socket) => {
    console.log("client-connect", socket.id)
})


app.get('/', (req: any, res: any) => {
    res.send(`
        <html lang = "en" >
        <head>
        <meta charset="UTF-8" >
        <meta name="viewport" content = "width=device-width, initial-scale=1.0" >
        <meta http - equiv="X-UA-Compatible" content = "ie=edge" >
        <script src="/socket.io/socket.io.js"></script>
        <title>Document </title>
        </head>
        <body>
        <script>
        var chat = io.connect('http://localhost:3000/649');
        </script>
        this is html page
        </body>
        </html>`)
})
httpServer.listen(3000, function () {
    console.log('listening on *:3000');
});