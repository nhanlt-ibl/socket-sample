import * as express from "express";
const renderHtml = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
    this.server.get("/", this.helloWorld);
  }
  private helloWorld = (req, res, next) => {
    res.send(renderHtml());
  };
}
