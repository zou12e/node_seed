const logger = require('./logger');

module.exports = (req, res, next) => {
    logger.infos(
        req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress,
        req.method,
        req.url,
        req.query,
        req.body);
    next();
};
