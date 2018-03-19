const fmrpc = require('../../../middleware/fmrpc');
const _ = require('lodash');

const CommonService = {
    getConfig (req, res) {
        res.end('ok');
    },

    async getGrpc (req, res) {
        const bs = await fmrpc.fetch('gateway.getBrokers').then(r => _.map(r.List, b => {
            switch (b.BrokerID) {
            case 1: b.Name = 'RH'; break;
            case 2: b.Name = 'RiseHill'; break;
            case 3: b.Name = 'Demo'; break;
            case 4: b.Name = 'FXCM'; break;
            case 5: b.Name = 'KVB'; break;
            case 6: b.Name = 'KVBmini'; break;
            }
            return b;
        })).catch(e => {
            return [];
        });
        res.json(bs);
    }
};
module.exports = CommonService;
