import app from './app';
import * as https from 'https';
import * as fs from 'fs';

const PORT = process.env.port || 3000;
const httpsOptions = {
  key: fs.readFileSync('./config/key.pem'),
  cert: fs.readFileSync('./config/cert.pem')
};

https.createServer(httpsOptions, app).listen(PORT, () => console.log(`Server running on port ${PORT}`));