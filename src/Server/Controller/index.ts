import * as express from "express";
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
    this.server.get("/socket", this.socketEvent);
    this.server.get("/lotto/api?game=lotto-5-45", this.drawInfo);
  }
  private socketEvent = (req, res, next) => {
    res.send(renderHtml());
  };
  private moduleUser = (req, res, next) => {};
  private moduleDraw = (req, res, next) => {};
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
  };
  private drawAction = (action: string) => {
    switch (action) {
      case "info":
        return {
          status: 1,
          message: "OK",
          result: {
            draw: 28,
            stage: "FinishSelling",
            jackpotNumbers: {
              jackpot: null,
              bonus: null
            },
            jackpotAmount: "131524220550000000000",
            jackpotAmountInUSD: "26907.98801212241055",
            winningJackpotTotal: 0,
            prizePool: "131524252400000000000",
            columnPrice: "10000000000000",
            fiatRate: "20458580100",
            _2ndPrize: "10000000000000000000",
            _3rdPrize: "8000000000000000000",
            _4thPrize: "7000000000000000000",
            _5thPrize: "5000000000000000000",
            winningPrize2Total: 0,
            winningPrize3Total: 0,
            winningPrize4Total: 0,
            winningPrize5Total: 0
          }
        };
      case "completeStage":
        return {
          status: 1,
          message: "OK",
          result: {
            calculateJackpot: [
              1,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11,
              12,
              13,
              14,
              15,
              16
            ]
          }
        };
      case "prizesList":
        return {};
      case "summaryTotal":
        return {};
      case "summaryList":
        return {};
      case "ticketsList":
    }
  };
  private drawInfo = (req, res, next) => {
    res.json({
      status: 1,
      message: "OK",
      result: {
        draw: 28,
        stage: "FinishSelling",
        jackpotNumbers: {
          jackpot: null,
          bonus: null
        },
        jackpotAmount: "131524220550000000000",
        jackpotAmountInUSD: "26907.98801212241055",
        winningJackpotTotal: 0,
        prizePool: "131524252400000000000",
        columnPrice: "10000000000000",
        fiatRate: "20458580100",
        _2ndPrize: "10000000000000000000",
        _3rdPrize: "8000000000000000000",
        _4thPrize: "7000000000000000000",
        _5thPrize: "5000000000000000000",
        winningPrize2Total: 0,
        winningPrize3Total: 0,
        winningPrize4Total: 0,
        winningPrize5Total: 0
      }
    });
  };
  public getRouter = () => this.server;
}
