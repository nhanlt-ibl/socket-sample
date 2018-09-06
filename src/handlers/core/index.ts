import { Server, createServer } from "http";
import * as express from "express";
import * as socketIo from "socket.io";

export class BaseApp {
  public static readonly PORT: number = 3000;
  public static readonly DOMAIN: string = 'http://localhost:3000';
  private port:string|number;
  private app: express.Application;
  private server: Server;
  private io: socketIo.Server;
  constructor(){
    this.initConfig()
    this.createApp()
    this.createServer()
    this.createIo()
    this.startService()
  }
  private initConfig(){
    this.port = process.env.PORT || BaseApp.PORT;
  }
  private createApp(){
    this.app = express()
  }
  private createServer(){
    this.server=createServer(this.app)
  }
  private createIo(){
    this.io=socketIo(this.server)
  }
  private startService(){
    this.server.listen(this.port,()=>{
      console.log(`SERVER IS RUNNING ON ${this.port}`)
    })
  }
}
