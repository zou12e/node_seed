
const express = require('express');
const router = express.Router();

const CommonService = require('./service/CommonService');
const AuthService = require('../auth/service/AuthService');

// test
router.get('/test', AuthService.getCookie, CommonService.getConfig);

// test
router.get('/grpc', AuthService.getCookie, CommonService.getGrpc);

module.exports = router;
