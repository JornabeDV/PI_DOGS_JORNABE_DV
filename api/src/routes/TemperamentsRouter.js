const {Router} = require('express');
const TemperamentsRouter = Router();
const getAllTemperamentsHandler = require('../Handlers/getAllTemperamentsHandler')

TemperamentsRouter.get('/', getAllTemperamentsHandler);

module.exports = TemperamentsRouter;