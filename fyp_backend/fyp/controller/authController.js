const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const { validationResult } = require('express-validator');

const Admin = require('../models/admin');

const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6e8fcb0de24708",
    pass: "b3606dcf083627"
  }
});

exports.getLogin = (req, res, next) => {
  let error = req.flash('error');
  let success = req.flash('success');
  if (error.length > 0) {
    flashErrorMessage = error[0];
  } else {
    flashErrorMessage = null;
  }

  if (success.length > 0) {
    flashSuccessMessage = success[0];
  } else {
    flashSuccessMessage = null;
  }

  res.render('login', {
    path: '/login',
    pageTitle: 'Login | Zakat System',
    flashSuccessMessage: flashSuccessMessage,
    errorMessage: flashErrorMessage
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  Admin.findOne({ email: email })
    .then(admin => {
      if (!admin) {
        req.flash('error', 'Invalid email or password.');
        return res.redirect('/admin/login');
      }
      bcrypt
        .compare(password, admin.password)
        .then(doMatch => {
          if (doMatch) {
            if(admin.status === 'disable') {
              req.flash('error', 'Your account is disabled, Please contact the adminstrator to activate it again.');
              return res.redirect('/admin/login');
            }
            req.session.isLoggedIn = true;
            req.session.user = admin;
            return req.session.save(err => {
                res.redirect('/admin');
            });
          }
          req.flash('error', 'Invalid email or password.');
          res.redirect('/admin/login');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/admin/login');
        });
    })
    .catch(err => console.log(err));
};

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    res.redirect('/admin/login');
  });
};

exports.getReset = (req, res, next) => {
  let error = req.flash('error');
  if (error.length > 0) {
    flashErrorMessage = error[0];
  } else {
    flashErrorMessage = null;
  }

  res.render('auth/reset', {
    path: '/admin/reset',
    pageTitle: "Reset Password | Zakat System",
    flashErrorMessage: flashErrorMessage,
    errorMessage: [],
    oldInput: {
      email: ""
    }
  })
}

exports.postReset = (req, res, next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
      return res.status(422).render('auth/reset', {
          pageTitle: "Reset Password | Zakat System",
          path: '/admin/reset',
          errorMessage: errors.array(),
          flashErrorMessage: "",
          oldInput: {
              email: req.body.email,
          }
      });
  }

  crypto.randomBytes(32, (err, buffer) => {
    if(err) {
      req.flash('error', 'Oops! Something went wrong');
      res.redirect('/admin/reset');
    }
    
    const token = buffer.toString('hex');
    Admin.findOne({ email: req.body.email })
    .then(user => {
      if(!user) {
        req.flash('error', 'No Account with that email exists!');
        res.redirect('/admin/reset');
      }
      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 3600000;
      return user.save();
    })
    .then(result => {
      req.flash('success', 'An Email was sent to your email with the instructions to reset your password');
      res.redirect('/admin/login')
      return transporter.sendMail({
        to: req.body.email,
        from: 'fyp@node.com',
        subject: 'Password Reset',
        html: `
          <p>You requested a password reset</p>
          <p>Click this <a href="http://localhost:3000/admin/reset/${token}">link</a> to set a new password </p>
          <p>This link will expire in 1 hour!</p>
        `,

      })
    })
    .catch(err => {
      console.log(err);
    })
  })
}

exports.getNewPassword = (req, res, next) => {
  const token = req.params.token;
  Admin.findOne({ resetToken: token, resetTokenExpiration: {$gt: Date.now() } })
  .then(user => {
    let error = req.flash('error');
    if (error.length > 0) {
      errorMessage = error;
    } else {
      errorMessage = null;
    }

    res.render('auth/update-password', {
      path: '/admin/new-password',
      pageTitle: "New Password | Zakat System",
      errorMessage: errorMessage,
      userId: user._id.toString(),
      passwordToken: token
    })
  })
  .catch(err => console.log(err))
}

exports.postNewPassword = (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  let resetUser;

  const errors = validationResult(req);
  if(!errors.isEmpty()) {
      req.flash('error', errors.array());
      res.redirect('/admin/reset/'+passwordToken);
  }

  Admin.findOne({ resetToken: passwordToken, resetTokenExpiration: {$gt: Date.now() }, _id: userId })
  .then(user => {
    resetUser = user;
    return bcrypt.hash(newPassword, 12);
  })
  .then(hashedPassword => {
    resetUser.password = hashedPassword;
    resetUser.resetToken = undefined;
    resetUser.resetTokenExpiration = undefined;
    return resetUser.save();

  })
  .then(resut => {
    req.flash('success', 'Your password was reset successfully!');
    res.redirect('/admin/login');
  })
  .catch(err => console.log(err))
}
