const { Router } = require('express');
const Thing = require('../models/Thing');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const thing = await Thing.getByID(req.params.id);
    res.json(thing);
  })
  .get('/', async (req, res) => {
    const things = await Thing.getAll();
    const ids = things.map((thing) => ({ id: thing.id, name: thing.name }));
    res.json(ids);
  });
