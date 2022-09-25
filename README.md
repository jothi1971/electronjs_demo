# electronjs_demo
simple demo using ElectronJS
This code shows how the Main and Renderer processes communicate
Use of BrowserWindow
Use of preload script to expose ElectronAPI to renderer process
WebSocket communication
The following instructions are for WINDOWS Operating System
1 setup webserver
create a folder named say WSServer
Copy server.js to that folder
run "npm install ws"
run "node server.js"
This will start the WebSocket server at port 8082

2 ElectronJS demo
Copy these all files to a folder say ElectronDemo
run "npm install electron --save-dev" in that folder
run "npm run start"

for any setup issues please refer
https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app

click demo->open camera
wait for some time to display video stream from your PC Camera
click camera image to take the picture

click demo->create WebSocket
type in some message and check the message displayed on the websocket server



