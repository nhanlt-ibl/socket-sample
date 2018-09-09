import * as openSocket from 'socket.io-client'

class SocketIO {
    private static readonly SOCKET_SERVER = process.env.SOCKET_SERVER || 'http://localhost:3002'
    private socketIO: any;
    private game: string;
    constructor(game: string) {
        this.game = game
    }
    public initConnection = (cb: (res, err) => void) => {
        this.socketIO = openSocket(`${SocketIO.SOCKET_SERVER}/${this.game}`)
        this.socketIO.on('connect', (data: any) => {
            return cb("success", null)
        })
        this.socketIO.on('error', (data) => {
            return cb(null, data)
        })
        this.socketIO.on('connect_error', (data) => {
            cb(null, data)
            this.socketIO.close()
        })
    }
    public write = (event: string, data: any) => {
        this.socketIO.emit(event, data)
    }
    public read = (event: string, cb: (data) => void) => {
        return this.socketIO.on(event, cb)
    }
    public getSocket = () => {
        return this.socketIO
    }
}
export default SocketIO