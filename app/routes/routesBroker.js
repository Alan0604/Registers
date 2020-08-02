const express = require('express');
const registerRouter = express.Router();
const registerService = require('../services/registerService.js');

registerRouter.post('/', registerService.create);
registerRouter.get('/', registerService.findAllBroker);
registerRouter.get('/name', registerService.findByNameBroker);
registerRouter.put('/:id', registerService.update);
registerRouter.delete('/:id', registerService.remove);

module.exports = registerRouter;
