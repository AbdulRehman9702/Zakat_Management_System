const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const moment = require("moment");
const Stripe = require('stripe');

const User = require("../../models/user");
const City = require("../../models/city");
const CheckoutSession = require('../../models/checkoutSession');

const stripe = require('stripe')('sk_test_51PQrVbILQxcKPUE9YTQ6TcOkaNFq6S76MqpJIdFaoCgsAhKahgRGMAL7yJYjVCrST3fp4Y3KiCGKktm2RJ0lByaV00qYWKo00P');

exports.index = (req, res, next) => {
  User.find({ zakat_status: "valid", status: 'active' })
    .populate("city")
    .then((users) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(users));
    })
    .catch((err) => console.log(err));
};

exports.singleUserDetail = (req, res, next) => {
  const userId = req.params.userId;

  User.findById(userId)
    .populate("city")
    .then((user) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(user));
    })
    .catch((err) => console.log(err));
};

exports.getCities = (req, res, next) => {
  City.find()
  .then(cities => {
      res.send(JSON.stringify(cities));
  })
  .catch(err => console.log(err));
}

exports.checkoutSession = async (req, res) => {
  const { price, name, email, paidToUserId } = req.body;

  if (!price || isNaN(price)) {
    return res.status(400).send('Invalid price value');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Custom Amount',
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      }],
      customer_email: email,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    // Save the session data to MongoDB
    const checkoutSession = new CheckoutSession({
      sessionId: session.id,
      name: name,
      email: email,
      price: price,
      user: paidToUserId,
      status: "Pending"
    });
    await checkoutSession.save();

    res.json({ id: session.id });
  } catch (error) {
    console.error(`Error creating checkout session: ${error.message}`, error);
    res.status(500).send(`Error creating checkout session: ${error.message}`);
  }
};


exports.signUpUser = (req, res, next)  => {
  const { name, address, phone_number, description, city } = req.body;

  const picture = req.file;

  if(!picture) {
      const customError = {
          type: 'field',
          msg: 'Uploaded image does not contain valid extensions, Valid extensions are jpeg, jpg, png',
      };

      return res.status(500).json(customError);
  }

  const imageUrl = picture ? picture.path : '';

  const user = new User({
      name: name,
      city: city,
      address: address,
      phone_number: phone_number,
      picture: picture,
      description: description,
      zakat_status: 'invalid',
      picture: imageUrl,
      status: 'active'
  });
  user.save()
  .then(result => {
    return res.status(200).json({message: "You have been succeessfuly registereted, Our administration team will contact you for further details"});
  })
  .catch(err => console.log(err));
}