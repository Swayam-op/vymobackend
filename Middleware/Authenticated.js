function isAuthenticated(req, res, next){
    const authenticated = true;
    if(authenticated){
        next();
    }
    return res.status(401).send({message : "You are not permitted to access this site.", success:false})
}