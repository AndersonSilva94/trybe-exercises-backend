const express = require('express');
const { Patient, Plan } = require('../models');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const plans = await Plan.findAll({
      where: { plan_id: id },
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