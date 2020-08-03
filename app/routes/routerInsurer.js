const express = require('express');
const registerRouterInsurer = express.Router();
const registerServiceInsurer = require('../services/registerServiceInsurer');

registerRouterInsurer.post('/', registerServiceInsurer.create);
registerRouterInsurer.get('/', registerServiceInsurer.findAllInsurer);
registerRouterInsurer.get('/name', registerServiceInsurer.findByNameInsurer);
registerRouterInsurer.put('/:id', registerServiceInsurer.update);
registerRouterInsurer.delete('/:id', registerServiceInsurer.remove);

module.exports = registerRouterInsurer;
