const checkRating = (req, res, next) => {
    if(req.body.rating > 3) {
        req.body.featured = true;
        next();
    }
};

module.exports = {
    checkRating
}