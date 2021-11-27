let admins = ['greta', 'ada', 'vim', 'tim']

module.exports = (req,res,next) => {
    if(admins.includes(req.query.user)){
        next()
    }else{
        res.render('errorAdmin')
    }
}

