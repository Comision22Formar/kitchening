module.exports = (req,res, next) => {
    if(req.session.userLogin){
        return res.redirect('/usuarios/perfil')
    }
    return next()

}