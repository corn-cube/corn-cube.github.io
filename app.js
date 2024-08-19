var ws = new WebSocket("wss://echo.websocket.org/")

ws.onopen = () => {
    ws.send("Sussy Wussinger!" + new Date().toString());
}
ws.onmessage = console.log;

// ws.onclose= console.log;
// ws.onopen = console.log;
// ws.onopen = console.log;