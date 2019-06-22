const express = require('express');
const BillController = require('./controllers/BillController');

const routes = new express.Router();

routes.get('/bills', BillController.index);
routes.get('/bills/:id', BillController.show);
routes.post('/bills', BillController.store);
routes.put('/bills/:id/inactive', BillController.update);
routes.put('/bills/:id/paid', BillController.update);

module.exports = routes;
