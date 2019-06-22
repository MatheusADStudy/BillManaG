const mongoose = require('mongoose');

const Bill = mongoose.model('Bill');

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const bills = await Bill.paginate(
      { state: [0, 1] },
      {
        page,
        limit: 10,
        sort: { createdAt: -1 },
      },
    );
    return res.json(bills);
  },
  async show(req, res) {
    const bill = await Bill.findById(req.params.id);

    return res.json(bill);
  },
  async store(req, res) {
    const bill = await Bill.create(req.body);

    req.io.emit('bill', bill);
    return res.json(bill);
  },
  async update(req, res) {
    const contas = await Bill.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(contas);
  },
};
