import express, { Request, Response } from 'express';
import DB from './config/mongoose';
import Test from "./model/test.model";

DB().then(async () => {
  const test = new Test({
    thing: 'do something'
  })
  await test.save()
  console.log(test);
}).catch((error) => {
  console.log(error);
})

const portNumber = 8080;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello word!!');
})

app.listen(portNumber, 'localhost', () => {
  console.log('Listen on localhost:' + portNumber);
})
