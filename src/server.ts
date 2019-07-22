import app from './app';
import * as https from 'https';
import * as fs from 'fs';

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));