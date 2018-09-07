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
    this.server.get("/", this.helloWorld);
    this.server.post("/file",this.handleClientFile)
  }
  private helloWorld = (req, res, next) => {
    res.send(renderHtml());
  };
  private handleClientFile=(req,res,next)=>{

  }
}
