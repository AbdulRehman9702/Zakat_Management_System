const { validationResult } = require('express-validator');
const moment = require('moment');

const City = require('../models/city');
const User = require('../models/user');

exports.index = (req, res, next) => {
    let message = req.flash('success');
    let errorMessage = req.flash('error');


    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }

    if (errorMessage.length > 0) {
        errorMessage = errorMessage[0];
    } else {
        errorMessage = null;
    }

    City.find()
    .then(cities => {
        res.render('cities/index', {
            cities: cities,
            pageTitle: "Cities | Zakat System",
            path: '/cities/all',
            message: message,
            errorMessage: errorMessage,
            moment: moment,
        });
    })
    .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    res.render('cities/create', {
        pageTitle: "Add City | Zakat System",
        path: '/cities/create',
        errorMessage: [],
        oldInput: {
            name: "",
            status: ""
        }
    });
}

exports.store = (req, res, next) => {
    const { name, status } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('admins/create', {
            pageTitle: "Create Admin | Zakat System",
            path: '/cities/create',
            errorMessage: errors.array(),
            oldInput: {
                name: name,
                status: status,
            }
        });
    }

    const city = new City({
        name: name,
        status: status,
    });
    
    city.save()
    .then(result => {
        req.flash('success', 'City Added successfully!');
        res.redirect('/admin/cities/all');
    })
    .catch(err => console.log(err));
}

exports.edit = (req, res, next) => {
    const cityId = req.params.cityId;
    City.findById(cityId)
    .then(city => {
        res.render('cities/edit', {
            city: city,
            pageTitle: "Edit City | Zakat System",
            path: 'cities/edit',
            errorMessage: [],
        });
    })
    .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    const userId = req.params.userId;
    const { name, status } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('cities/edit', {
            pageTitle: "Edit City | Zakat System",
            path: 'cities/edit',
            errorMessage: errors.array(),
            city: {
                _id: userId,
                name: name,
                status: status,
            }
        });
    }

    City.findById(cityId)
    .then(city => {
        city.name = name;
        city.status = status;
        return city.save();
    })
    .then(result => {
        req.flash('success', 'City Updated successfully!');
        res.redirect('/admin/cities/all');
    })
    .catch(err => console.log(err));
}

exports.delete = (req, res, next) => {
    const cityId = req.params.cityId;
    User.countDocuments({ city: cityId })
    .then(users => {
        if(users === 0) {
            City.findByIdAndDelete(cityId)
            .then(city => {
                if (city) {
                    req.flash('success', 'City deleted successfully!');
                    res.redirect('/admin/cities/all');
                } else {
                    req.flash('error', 'City not found');
                    res.redirect('/admin/cities/all');
                }
            })
        } else {
            req.flash('error', 'Oops! Something went wrong');
            res.redirect('/admin/cities/all');
        }
    })
    .catch(err => console.log(err));
}