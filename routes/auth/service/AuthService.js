const AuthService = {
    // 检查cookie
    checkCookie (req, res, next) {
        req.OpenId = req.cookies.openid;
        if (!req.OpenId) {
            res.status(500).json({data: 'no openid'});
        }

        next();
    },
    getCookie (req, res, next) {
        req.OpenId = req.cookies.openid;
        next();
    }
};
module.exports = AuthService;
