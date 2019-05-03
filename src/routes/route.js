const express =  require("express");
const controller = require("../controller/ControllerSpoiler");

const router = express.Router();

/**
 * Definindo as rotas de acesso a API
 */
router.get('/spoilers/:id', controller.findSpoiler);
router.get('/spoilers', controller.allSpoiler);
router.post('/spoilers',controller.createSpoiler);
router.put('/spoilers/:id',controller.updateSpoiler);
router.delete('/spoilers/:id',controller.deleteSpoiler);

module.exports = router;