import express, { Request, Response } from 'express';

const portNumber = 8080;
const app = express();



app.get('/', (req: Request, res: Response) => {
  res.send('Hello word!!');
})

app.listen(portNumber, 'localhost', () => {
  console.log('Listen on localhost:' + portNumber);
})
