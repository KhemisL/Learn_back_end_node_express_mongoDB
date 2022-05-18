const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try{
        const getToken = req.headers.authorization.split(" ")[1]
        const decodeToken = jwt.verify(getToken, "RANDOM_TOKEN_SECRET")
        const userId = decodeToken.userId
        
        if(req.body.userId && req.body.userId != userId) {
            throw "UserId non valable"
        }else{
            next()
        }
    }catch (error) {
        res.status(401).json({error: error | "Requete non authantifiée"})
    }
}