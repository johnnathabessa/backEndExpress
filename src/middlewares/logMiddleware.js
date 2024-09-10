const logMiddleware = (req, res, next) => {
    console.log(`REQUEST: ${req.method} ${req.url} ${new Date().toTimeString()}`);
    next();

}

export default logMiddleware;