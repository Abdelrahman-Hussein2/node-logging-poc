const winston = require('winston');
require("winston-mongodb");

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
});

logger.add(new winston.transports.MongoDB({
    db: "mongodb://localhost:27017/logs",
    level: "info",
    options: { useUnifiedTopology: true },
    expireAfterSeconds: 10,
    metaKey: "service",
}))

module.exports = logger;