const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const checkoutSessionSchema = new mongoose.Schema({
  sessionId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  status: {
    type: String,
    enum: ['Completed', 'Pending'],
    required: true
}
}, {
  timestamps: true,
});

const CheckoutSession = mongoose.model('CheckoutSession', checkoutSessionSchema);

module.exports = CheckoutSession;
