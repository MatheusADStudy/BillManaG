const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const BillSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    amount: Number,
    isParcels: Boolean,
    parcels: Number,
    state: Number,
  },
  {
    timestamps: true,
  },
);

BillSchema.plugin(mongoosePaginate);

mongoose.model('Bill', BillSchema);
