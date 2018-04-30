"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var logger = winston_1.createLogger({
    level: 'debug',
    format: winston_1.format.json(),
    transports: [
        new winston_1.transports.Console(),
    ]
});
exports.default = logger;
//# sourceMappingURL=logger.js.map