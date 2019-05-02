const Spoiler =  require("../model/spoiler");

exports.findSpoiler = (req, res, next) => {
    const id = req.params.id

    Spoiler.findById(id).then(spoiler => {
        
        if (spoiler) {
            res.send(spoiler);
        } 
        else {
            res.status(404).send();
        }
    }).catch(error => next(error));
};

exports.allSpoiler = (req, res, next) => {
    let limit = parseInt(req.query.limit || 0);
    let page = parseInt(req.query.page || 0);

    if (!Number.isInteger(limit) || !Number.isInteger(page)) {
        res.status(400).send();
    }

    const ITEMS_PER_PAGE = 10;

    limit = limit > ITEMS_PER_PAGE || limit < 0 ? ITEMS_PER_PAGE : limit;
    page = page <= 0 ? 0 : page * limit;

    Spoiler.findAll( {limit: limit, offset: page} ).then(spoilers => {
        res.send(spoilers);
    }).catch(error => next(error));
}