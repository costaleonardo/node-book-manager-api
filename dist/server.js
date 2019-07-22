"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const fs = require("fs");
const PORT = 3000;
const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
};
// https.createServer(httpsOptions, app).listen(PORT, () => console.log(`Server running on port ${PORT}`));
app_1.default.listen(PORT, () => console.log('Connected.'));
//# sourceMappingURL=server.js.map