const Admin = require('../models/admin');
const User = require('../models/user');
const City = require('../models/city');
const Payment = require('../models/checkoutSession');

exports.index = async (req, res, next) => {
  try {
    const totalAdmins = await Admin.countDocuments();
    const totalUsers = await User.countDocuments();
    const totalCities = await City.countDocuments();
    const totalPayments = await Payment.countDocuments();
    const newPayments = await Payment.find({ status: 'Pending' }).countDocuments();

    res.render('index', {
        pageTitle: "Dashboard | Zakat System",
        path: '/',
        totalAdmins,
        totalUsers,
        totalCities,
        totalPayments,
        newPayments
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};