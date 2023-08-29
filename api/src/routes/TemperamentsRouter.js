const {Router} = require('express');
const TemperamentsRouter = Router();
const getAllTemperamentsHandler = require('./getAllTemperamentsHandler')



TemperamentsRouter.get('/', getAllTemperamentsHandler);

module.exports = getAllTemperamentsHandler;