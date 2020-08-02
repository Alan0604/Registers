const express = require('express');
const registerRouterBroker = express.Router();
const registerServiceBroker = require('../services/registerService.js');

registerRouterBroker.post('/', registerServiceBroker.create);
registerRouterBroker.get('/', registerServiceBroker.findAllBroker);
registerRouterBroker.get('/name', registerServiceBroker.findByNameBroker);
registerRouterBroker.put('/:id', registerServiceBroker.update);
registerRouterBroker.delete('/:id', registerServiceBroker.remove);

module.exports = registerRouterBroker;
