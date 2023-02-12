const authorize = (req, res, next) => {
    const {name} = req.query;

    if(name === 'Tofik') {
        req.user = {name: 'Tofik', id: 3}
        next()
    } else {
        res.status(401).send('Unauthorized User')
    }
}

module.exports = {authorize}