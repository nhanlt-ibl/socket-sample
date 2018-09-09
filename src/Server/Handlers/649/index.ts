import * as socketIo from "socket.io";
export default class HandleEvents {
  private io: socketIo.Server;
  public static readonly game = "649";
  constructor(socketInstance: socketIo.Server) {
    this.io = socketInstance;
    this.io.of(`/${HandleEvents.game}`).on("connect", (client: any) => {
      console.log("connectSuccess")
      this.onDisconnect(client);
      this.sendFactory('NEW_EVENT', client)
    });
  }
  private onDisconnect = (client: any) => {
    client.on("disconnect", (reason: any) => {
      console.log("client-disconnect", reason);
    });
  };
  private sendFactory = (event: string, client: any) => {
    client.on(event, (data) => {
      console.log("new_event", data)
      client.broadcast.emit(event, data)
    })
  }
}
