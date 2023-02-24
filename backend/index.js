const { debug } = require("debug");
const http = require("http");
const app = require("./app");

/* Define port */
const port = process.env.PORT || 8080;

/* Add port to APP */
app.set("port", port);

/* Create server */
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
