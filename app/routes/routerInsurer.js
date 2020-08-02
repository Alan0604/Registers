const express = require('express');
const registerRouterInserur = express.Router();
const registerServiceInsurer = require('../services/registerServiceInsurer');

registerRouterInserur.post('/', registerServiceInsurer.create);
registerRouterInserur.get('/', registerServiceInsurer.findAllInsurer);
registerRouterInserur.get('/name', registerServiceInsurer.findByNameInsurer);
registerRouterInserur.put('/:id', registerServiceInsurer.update);
registerRouterInserur.delete('/:id', registerServiceInsurer.remove);

module.exports = registerRouterInserur;
