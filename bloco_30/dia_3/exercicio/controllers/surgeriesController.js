const express = require('express');
const { Patient, Surgery } = require('../models');
const router = express.Router();

router.get('/:name', async (req, res) => {
  try {
    const { name } = req.params;
    const surgeries = await Surgery.findAll({
      where: { doctor: name },
      include: [{ model: Patient, as: 'patients', through: { attributes: [] } }]
    });

    return res.status(200).json(surgeries);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo está errado' });
  };
});

module.exports = router;