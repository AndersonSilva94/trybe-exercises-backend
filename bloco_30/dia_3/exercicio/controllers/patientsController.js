const express = require('express');
const { Patient, Plan } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: { model: Plan, as: 'plans' },
      attributes: {
        exclude: ['plan_id']
      }
    });

    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado ' });
  }
});

module.exports = router;