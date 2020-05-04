const express = require('express');
const Country = require('./routes/country');
const Marathon = require('./routes/marathon');
api = express.Router();

api.get('/', async(req, res) => {
  await res.status(200).send({
    message:'Funcionando API Restful de Maratones con Node.js y MongoDB.'
  });
});

api.post('/countries', Country.postCountries)
api.get('/countries', Country.getCountries)
api.get('/marathons', Marathon.getMarathons)
api.post('/marathon', Marathon.postMarathon)
api.get('/marathon/:id', Marathon.getMarathon)
api.put('/marathon/:id', Marathon.putMarathon)
api.delete('/marathon/:id', Marathon.deleteMarathon)

module.exports = api