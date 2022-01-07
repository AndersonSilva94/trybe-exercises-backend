const express = require('express');
const { Patient, Plan } = require('../models');
const router = express.Router();

router.get('/patients', async (_req, res) => {
  try {
    const plans = await Plan.findAll({
      include: [{
        model: Patient, as: 'patients', attributes: {
          exclude: ['plan_id']
        }
      }]
    });

    return res.status(200).json(plans)
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: 'Algo deu errado' });
  }
})

module.exports = router;