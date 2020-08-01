const express = require('express');
const registerService = require('../src/services/registerService');
const registerRouter = express.Router();

registerRouter.post('/', registerService.create);
registerRouter.get('/name', registerService.findByNameBroker);
registerRouter.put('/:id', registerService.update);
registerRouter.delete('/:id', registerService.remove);

module.exports = registerRouter;
