import * as express from 'express';
export default class Root {
  private server: express.Application;
  constructor(serverInstance: express.Application) {
    this.server = serverInstance;
    this.server.get('/',this.helloWorld)
  }
  private helloWorld = (req,res,next) => {
   res.send('hello world')
  };
}
