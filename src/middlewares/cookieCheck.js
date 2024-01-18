module.exports = (req,res,next) => {
    if(req.cookies.kitchening4EV3R_user){
        req.session.userLogin = req.cookies.kitchening4EV3R_user
    }

    next()
}