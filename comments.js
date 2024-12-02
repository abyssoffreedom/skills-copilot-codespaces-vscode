// Create web server
// Create a new server instance
const server = new Hapi.Server();
// Define the port to listen on
server.connection({
  port: 3000
});
// Create a route for the comments endpoint
server.route({
  method: 'GET',