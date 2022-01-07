const express = require('express');
const { Patient, Plan, Surgery } = require('../models');
const router = express.Router();

router.get('/plans', async (_req, res) => {
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

router.get('/surgeries', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] } }],
    });

    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.post('/', async (req, res) => {
  try {
    const { fullname, plan_id } = req.body;
    const newPatient = await Patient.create({
      fullname,
      plan_id
    });

    return res.status(201).json(newPatient);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

router.get('/surgeriesWithoutDoctor', async (_req, res) => {
  try {
    const patients = await Patient.findAll({
      include: [{ model: Surgery, as: 'surgeries', through: { attributes: [] }, attributes: { exclude: ['doctor'] } }],
    });

    return res.status(200).json(patients);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

module.exports = router;