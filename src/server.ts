import App from "./app";
const portNumber = process.env.PORT ? Number(process.env.PORT) : 8080;

App.app.listen(portNumber, 'localhost', () => {
  console.log('Listen on localhost:' + portNumber);
});
