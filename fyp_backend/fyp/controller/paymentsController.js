const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const moment = require('moment');
const nodemailer = require('nodemailer');

const CheckoutSession = require('../models/checkoutSession');

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6e8fcb0de24708",
      pass: "b3606dcf083627"
    }
  });

exports.index = (req, res, next) => {
    let message = req.flash('success');
    let errorMessage = "";
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }

    CheckoutSession.find()
    .populate('user')
    .then(payments => {
        res.render('payments/index', {
            payments: payments,
            pageTitle: "Payments | Zakat System",
            path: '/payments/all',
            message: message,
            errorMessage: errorMessage,
            moment: moment,
        });
    })
    .catch(err => console.log(err));
}

exports.changeStatus = async (req, res, next) => {
    const id = req.params.id;

    try {
        // Find the payment by ID and populate the user field
        const payment = await CheckoutSession.findById(id).populate('user');
        
        // Check if payment exists
        if (!payment) {
            return res.status(404).send('Payment not found');
        }

        // Update payment status
        payment.status = "Completed";
        await payment.save();

        // Send email notification
        await transporter.sendMail({
            to: payment.email,
            from: 'fyp@node.com',
            subject: 'Payment Reached',
            html: `
              <p>Your payment has been successfully placed in hand to the recipient: ${payment.user.name}</p>
              <p>If you want to further confirm the donation, you can contact the recipient at: ${payment.user.phone_number}</p>
            `,
        });

        // Set flash message and redirect
        req.flash('success', 'Payment status updated successfully!');
        res.redirect('/admin/payments/all');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

