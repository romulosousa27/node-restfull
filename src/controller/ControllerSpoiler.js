const Spoiler =  require("../model/spoiler");

/** 
 *  Middleware 
 *  Retorna um dado Spoiler 
 * 
 */
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


/**
 *  Middleware 
 *  Retorna todos os dados Spolier com paginação e limite
 * 
*/
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
};


/**
 * Middleware
 * Criando um novo Spoiler
 * 
 */
exports.createSpoiler = (req, res, next) => {
    const title = req.body.title;
    const user = req.body.user;
    const description = req.body.description;

    Spoiler.create({
        title: title,
        user: user,
        description: description,

    }).then( ()=>{ 
        res.status(201).send();
    }).catch((error) => next(error))
};


/** 
 * Middleware
 * Atualizando um Spoiler
 * 
 * @param id
 * 
 */
exports.updateSpoiler = (req, res, next) => {
    const id = req.params.id;

    const title = req.body.title;
    const user = req.body.user;
    const description = req.body.description;

    Spoiler.findById(id).then( spoiler => {
        if (spoiler) {
            Spoiler.update(
            {
                title: title,
                user: user,
                description: description,
            },
            {
                where: {id : id}
            }).then( () => {
                res.send();
            }).catch(error => next(error));

        } 
        else {
            res.status(404).send();
        }
    }).catch(error => next(error));
};


/**
 * Middleware 
 * Deletando um Spoiler
 * 
 * @param id
 * 
 */
 exports.deleteSpoiler = (req, res, next) => {
     const id =  req.params.id;

     Spoiler.findById(id).then( spoiler => {
         if (spoiler) {
            Spoiler.destroy(
            {
                where: { id : id}
            }).then( () => {
                res.send();
            }).catch(error => next(error));
         } 
         else {
            res.status(404).send();
         }
     }).catch(error => next(error));
 }