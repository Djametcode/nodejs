const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const times = new Date().getFullYear;
    console.log(method, url, times)
    next()
}

module.exports = {logger}