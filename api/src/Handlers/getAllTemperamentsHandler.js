const {getAllTemperaments} = require("../controllers/getAllTemperaments")


const getAllTemperamentsHandler = async (req, res) => {
  try {
       const allTemperaments = await getAllTemperaments();
    res.status(200).json(allTemperaments);
  } catch (error) {
    res.status(400).send({error: error.message});
  }
};

module.exports = getAllTemperamentsHandler;