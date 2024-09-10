const AUTHORIZATION_UUID = '12345';
const authMiddleware = (req, res, next) => {

    if (req.headers.authorization !== AUTHORIZATION_UUID) {
        return res.status(401).json({ message: 'unauthorized' });
    }
    next(); 
}

export default authMiddleware;