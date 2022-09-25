const WebSocket = require("ws");

const wss = new WebSocket.Server({port:8082});
wss.on('connection', ws => {
    console.log("new client connected");

    //receive message event 
    ws.on('message', data => {
        console.log("client message : ", data.toString());
        ws.send("new msg from server");
    });

    ws.on('close', () => {
        console.log("client disconnected");
    });
});