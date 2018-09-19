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
            columnPrice: "10000000000000",
            fiatRate: "20458580100",
            _2ndPrize: "10000000000000000000",
            _3rdPrize: "8000000000000000000",
            winningPrize2Total: 0,
            winningPrize3Total: 0,
          }
        };
      case "completeStage":
        return {
          status: 1,
          message: "OK",
          result: {
            calculateJackpot: [
              1
            ]
          }
        };
      case "prizesList":
        return {
          status: 1,
          message: "OK",
          data: {
            "totalRecords": 2,
            "totalPages": 1,
            "page": 1,
            "offset": 10,
            "data": [
              {
                "winningNumbers": {
                  "jackpot": [
                    12,
                    14,
                    26,
                    39,
                    41,
                    44
                  ],
                  "bonus": 15
                },
                "details": {
                  "jackpot": {
                    "qty": 1,
                    "value": "300000000000000000",
                    "valueInUSD": 181.65
                  },
                  "prize2": {
                    "qty": 1,
                    "value": "300000000000000000",
                    "valueInUSD": 181.65
                  },
                  "prize3": {
                    "qty": 1,
                    "value": "300000000000000000",
                    "valueInUSD": 181.65
                  },
                  "prize4": {
                    "qty": 1,
                    "value": "300000000000000000",
                    "valueInUSD": 181.65
                  },
                  "prize5": {
                    "qty": 1,
                    "value": "300000000000000000",
                    "valueInUSD": 181.65
                  }
                },
                "status": "New",
                "draw": 1,
                "buyerAddress": "0x71c17d45d3af6e824ed5a6abcff8205763655e4e",
                "participation": "0x00000000000000000000000000000000000000000000000000000c0e1a27292c",
                "winningAmount": "74316666666666666.66666666666666667",
                "winningAmountInUSD": 44.99874166666667,
                "timestamp": 1529479719
              },
              {
                "winningNumbers": {
                  "jackpot": [
                    12,
                    14,
                    26,
                    39
                  ]
                },
                "details": {
                  "prize4": {
                    "qty": 10,
                    "value": "3000000000000000000",
                    "valueInUSD": 181.65
                  },
                  "prize5": {
                    "qty": 40,
                    "value": "1200000000000000000",
                    "valueInUSD": 181.65
                  }
                },
                "status": "New",
                "draw": 1,
                "buyerAddress": "0x71c17d45d3af6e824ed5a6abcff8205763655e4e",
                "participation": "0x000000000000000000000000000000000000000000000000000001020c0e1a27",
                "winningAmount": "300000000000000000",
                "winningAmountInUSD": 181.65,
                "timestamp": 1529479719
              }
            ]
          }
        };
      case "summaryTotal":
        return {
          "status": 1,
          "message": "OK",
          "result": {
            "totalTicketSold": 17,
            "totalStandardSold": 8,
            "totalPowerBuySold": 9,
            "totalTicketAmount": "170000000000000000",
            "totalTicketAmountInUSD": "102.935",
            "totalWinningTickets": 5,
            "totalWinningAmount": "148722950000000000000.00000000000000667",
            "totalWinningAmountInUSD": "90051.74622500000667",
            "totalClaimedAmount": "4200000000000000000",
            "totalClaimedAmountInUSD": "2543.1",
            "totalHoldingAmount": "144522950000000000000.00000000000000667",
            "totalHoldingAmountInUSD": "87508.64622500000667",
            "totalOverdueAmount": "0",
            "totalOverdueAmountInUSD": "0"
          }
        };
      case "summaryList":
        return {
          "status": 1,
          "message": "OK",
          "result":
          {
            "totalRecords": 24,
            "totalPages": 3,
            "page": 1,
            "offset": 10,
            "data":
              [
                {
                  "draw": 24,
                  "stage": "Inactived",
                  "startTimestamp": null,
                  "finishTimestamp": null,
                  "columnPrice": 0,
                  "columnPriceInUSD": 0,
                  "prizePool": "0",
                  "jackpotAmount": "0",
                  "movedTotalSales": false,
                  "totalTicketSold": 1,
                  "totalStandardSold": 0,
                  "totalPowerBuySold": 1,
                  "totalTicketAmount": "100000000000000",
                  "totalTicketAmountInUSD": "0.025",
                  "totalWinningTickets": 0,
                  "totalWiningTicketsAmount": "0",
                  "totalWiningTicketsAmountInUSD": "0",
                  "totalWinningAmount": "0",
                  "totalWinningAmountInUSD": "0",
                  "totalClaimedAmount": "0",
                  "totalClaimedAmountInUSD": "0",
                  "totalHoldingAmount": "0",
                  "totalHoldingAmountInUSD": "0",
                  "totalOverdueAmount": "0",
                  "totalOverdueAmountInUSD": "0"
                },
              ]
          }
        };
      case "ticketsList": {
        return {
          "status": 1,
          "message": "OK",
          "result":
          {
            "totalRecords": 3,
            "totalPages": 1,
            "page": 1,
            "offset": 10,
            "data":
              [
                {
                  "event": "BuyParticipation",
                  "args":
                  {
                    "drawFrom": "1",
                    "drawTo": "1",
                    "participation": "0x000000000000000000000000000000000000000000000000000002031b1c212c",
                    "buyer": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                    "seller": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                    "draw": 1,
                    "orgParticipation": "2,3,27,28,33,44"
                  },
                  "blockNumber": 207154,
                  "blockHash": "0xc0744a45edfd9bb1a959f99766660a4b77a3761471d887af14827a3533d6a8fc",
                  "transactionHash": "0x09b05921c1246e684e30dc3df0333f946f2ba1f4192010f9bd1401c89d9ffdb6",
                  "transactionIndex": 0,
                  "logIndex": 0,
                  "address": "0x2ced956e62e1b1518cf0a6eb17dccb61d751d67e",
                  "from": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                  "to": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                  "timestamp": 1533027023,
                  "id": "5b6022d190a47d0b6b0f6269",
                  "prizesList":
                    [
                    ],
                  "sellerName": "DEFAULT SELLER",
                  "receivedAmount": "10000000000000000",
                  "payment": "10000000000000000"
                },
                {
                  "event": "BuyParticipation",
                  "args":
                  {
                    "drawFrom": "1",
                    "drawTo": "2",
                    "participation": "0x0000000000000000000000000000000000000000000000000000010203040506",
                    "buyer": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                    "seller": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                    "draw": 1,
                    "orgParticipation": "1,2,3,4,5,6"
                  },
                  "blockNumber": 207234,
                  "blockHash": "0x4fa3f85557a67a3df2d299e4ee8f2ceb339c468d66f4be1ea0b63aa472912a07",
                  "transactionHash": "0x54809b46f4a636d7175016b5d8d890373efdb11e7082a1ac62ec0a86d2876542",
                  "transactionIndex": 0,
                  "logIndex": 0,
                  "address": "0x2ced956e62e1b1518cf0a6eb17dccb61d751d67e",
                  "from": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                  "to": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                  "timestamp": 1533027263,
                  "id": "5b6023c090a47d0b6b0f626c",
                  "prizesList":
                    [
                    ],
                  "sellerName": "DEFAULT SELLER",
                  "receivedAmount": "20000000000000000",
                  "payment": "20000000000000000"
                },
                {
                  "event": "BuyParticipation",
                  "args":
                  {
                    "drawFrom": "1",
                    "drawTo": "2",
                    "participation": "0x0000000000000000000000000000000000000000000000000000010203040506",
                    "buyer": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                    "seller": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                    "draw": 2,
                    "orgParticipation": "1,2,3,4,5,6"
                  },
                  "blockNumber": 207234,
                  "blockHash": "0x4fa3f85557a67a3df2d299e4ee8f2ceb339c468d66f4be1ea0b63aa472912a07",
                  "transactionHash": "0x54809b46f4a636d7175016b5d8d890373efdb11e7082a1ac62ec0a86d2876542",
                  "transactionIndex": 0,
                  "logIndex": 0,
                  "address": "0x2ced956e62e1b1518cf0a6eb17dccb61d751d67e",
                  "from": "0xfcd72c5cd2f4b1cb2b758811d8e1d2431209acea",
                  "to": "0x7deedd1c7474e8e5bd77f10e9d9b4ecefbb09726",
                  "timestamp": 1533027263,
                  "id": "5b6023c090a47d0b6b0f626c",
                  "prizesList":
                    [
                    ],
                  "sellerName": "DEFAULT SELLER",
                  "receivedAmount": "20000000000000000",
                  "payment": "20000000000000000"
                }
              ]
          }
        }
      }
    }
  };
  private apiStation = (req, res, next) => {
    const { action, module } = req.query
    switch (module) {
      case 'draw':
        this.drawAction(action)
      case 'action':
        this.userAction(action)
    }
    res.send(this.drawAction(action))

  };
  public getRouter = () => this.server;
}
