const router = require('express').Router();
const { Pokemon, Type } = require('../../models');

// The `/api/types` endpoint

// get all types
router.get('/', async (req, res) => {
    try {
      const typesData = await Type.findAll();
      console.log(typesData)
      return res.json(typesData);
    }
    catch (err) {
      console.log(err)
      return res.json(err)
    }
  });

  // get one type
router.get('/:id', async (req, res) => {
  try {
    const typeData = await Type.findOne({
      include: { model: Pokemon },
      where: {
        id: req.params.id,
      }
    }

    ).then((typeData) => {
      console.log(typeData);
      return res.json(typeData)
    });
  }
  catch (err) {
  console.log(err)
  return res.json(err)
}
});