const {Router} = require ("express");
const DogsRouter = Router();
const getAllDogsHandler = require("../Handlers/getAllDogsHandler");
const getDogsByIdHandler = require("../Handlers/getDogsByIdHandler");
const postDogsHandler = require("../Handlers/postDogsHandler");
const deleteDogsHandler = require("../Handlers/deleteDogsHandler");



DogsRouter.get("/", getAllDogsHandler)

DogsRouter.get("/:id", getDogsByIdHandler) // ruta dinámica.

DogsRouter.post("/", postDogsHandler)

DogsRouter.delete('/:id', deleteDogsHandler)

module.exports = DogsRouter;