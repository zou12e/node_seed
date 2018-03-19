
const commonRouter = require('./common');

const _route = '/jyds';

module.exports = function (app) {
    app.use(_route + '/common', commonRouter);
};
