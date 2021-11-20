const jwt = require('jsonwebtoken')

module.exports = function(role) {
    return function (req, res, next) {
        if(req.method === "OPTIONS"){
            next()
        }
        try{
            const token = req.headers.authorization.split(' ')[1] // Bearer gsdfrf3esgsdgaf
            if(!token){
                return res.status(401).json({message: "Not auth"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if(decoded.role !== role) {
                return res.status(403).json({message: "Has not access"})
            }
            req.user = decoded
            next()
        } catch (e) {
            return res.status(401).json({message: "Not auth"})
        }
    }
}