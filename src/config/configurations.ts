const PORT_DEFUALT = 8080;
const DB_URL = 'mongodb://localhost:27017/notes';
const KEY_SECRET = 'abc';

export const CONFIGURATIONS = {
  DB_URL: process.env.DB_URL || DB_URL,
  HOST_NAME: 'localhost',
  PORT_DEFUALT: process.env.PORT || PORT_DEFUALT,
  KEY_SECRET: process.env.KEY_SECRET || KEY_SECRET,
  STRATEGY: 'jwt',
}
