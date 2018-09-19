import * as express from "express";
import * as data from './json'
const renderHtml = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <head><link rel="stylesheet" href="https://unpkg.com/react-md@1.5.0/dist/react-md.indigo-pink.min.css"></head>
    <title>Document</title>
</head>
<body>
    <div id="root"/>
    <script src="/browser.js"></script>
</body>
</html>
`;
export default class Root {
  private server: express.Application;
  constructor(serverInstance: express.Application) {
    this.server = serverInstance;
    this.server.get("/", this.socketEvent);
    this.server.get("/lotto/api", this.apiStation);
  }
  private socketEvent = (req, res, next) => {
    res.send(renderHtml());
  };
  private userAction = (action: string) => {
    switch (action) {
      case "buyerLimit":
        return {};
      case "prizesList":
        return {};
      case "summaryTotal":
        return {};
      case "summaryList":
        return {};
      case "ticketsList":
    }
    return {
      status: 0,
      code: "SERVER_ERROR",
      message: "error"
    }
  };
  private drawAction = (action: string) => {
    switch (action) {
      case "info":
        return data.drawInfo
      case "completeStage":
        return data.countedDraw;
      case "prizesList"://ticket me win
        return data.ticketMeWin;
      case "summaryTotal"://claim total
        return data.summaryTotal;
      case "summaryList":// draw me bought
        return data.drawMeBought;
      case "ticketsList": {//ticket me bought
        return data.ticketMeBought
      }
    }
    return {
      status: 0,
      code: "SERVER_ERROR",
      message: "error"
    }
  };
  private apiStation = (req, res, next) => {
    const { action, module } = req.query
    switch (module) {
      case 'draw':
        return res.json(this.drawAction(action))
      case 'action':
        return res.json(this.userAction(action))
    }
    res.send({
      status: 0,
      code: "SERVER_ERROR",
      message: "error"
    })
  };
  public getRouter = () => this.server;
}
