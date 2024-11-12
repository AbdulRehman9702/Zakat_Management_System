const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const moment = require('moment');

const User = require('../models/user');
const City = require('../models/city');

exports.index = (req, res, next) => {
    let message = req.flash('success');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }

    User.find()
    .populate('city')
    .then(users => {
        res.render('users/index', {
            users: users,
            pageTitle: "Users | Zakat System",
            path: '/users/all',
            message: message,
            moment: moment,
        });
    })
    .catch(err => console.log(err));
}

exports.create = (req, res, next) => {

    City.find().then(cityDoc => {
        let cities = [];
        if(cityDoc.length > 0) {
            cities = [...cityDoc];
        }

        res.render('users/create', {
            pageTitle: "Create User | Zakat System",
            path: '/users/create',
            cities: cities,
            errorMessage: [],
            oldInput: {
                name: "",
                status: ""
            }
        });
    }).catch(err => console.log(err));
}

exports.store = (req, res, next) => {
    const { name, city, address, phone_number, description, zakat_status, status } = req.body;
    
    const picture = req.file;
    const errors = validationResult(req);
    if(!errors.isEmpty() || !picture)  {
        City.find().then(cityDoc => {
            let cities = [];
            if(cityDoc.length > 0) {
                cities = [ ...cityDoc ];
            }

            let errorsArray = [ ...errors.array() ];

            if(!picture) {
                const customError = {
                    type: 'field',
                    msg: 'Uploaded image does not contain valid extensions, Valid extensions are jpeg, jpg, png',
                };

                errorsArray = [  ...errors.array(), customError ];
            }

            return res.status(422).render('users/create', {
                pageTitle: "Create User | Zakat System",
                path: '/users/create',
                errorMessage: errorsArray,
                cities: cities,
                oldInput: {
                    name: name,
                    city: city,
                    address: address,
                    description: description,
                    phone_number: phone_number
                }
            });
        }).catch(err => console.log(err));
    }

    const imageUrl = picture ? picture.path : '';

    const user = new User({
        name: name,
        city: city,
        address: address,
        phone_number: phone_number,
        picture: picture,
        description: description,
        zakat_status: zakat_status,
        picture: imageUrl,
        status: status
    });
    user.save()
    .then(result => {
        req.flash('success', 'User created successfully!');
        res.redirect('/admin/users/all');
    })
    .catch(err => console.log(err));
}

exports.edit = (req, res, next) => {
    const userId = req.params.userId;
    User.findById(userId)
    .then(user => {
        City.find()
        .then(cities => {
            res.render('users/edit', {
                oldInput: user,
                pageTitle: "Edit User | Zakat System",
                path: '/users/edit',
                cities: cities,
                errorMessage: [],
            });
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    const userId = req.params.userId;
    const { name, city, address, phone_number, description, zakat_status, status } = req.body;
    const picture = req.file;
    const errors = validationResult(req);
    let errorsArray = [...errors.array()];

    if (req.fileValidationError) {
        errorsArray.push({
            param: 'picture',
            msg: req.fileValidationError
        });
    }

    if (errorsArray.length > 0) {
        City.find()
            .then(cities => {
                return User.findById(userId)
                    .then(userDoc => {
                        return res.status(422).render('users/edit', {
                            pageTitle: "Edit User | Zakat System",
                            path: '/users/edit',
                            errorMessage: errorsArray,
                            cities: cities,
                            oldInput: {
                                name: name,
                                city: city,
                                address: address,
                                phone_number: phone_number,
                                status: status,
                                description: description,
                                zakat_status: zakat_status,
                                picture: userDoc.picture,
                                _id: userDoc._id,
                            }
                        });
                    });
            })
            .catch(err => {
                console.error(err);
                // res.status(500).send('Server error');
            });
    } else {
        const imageUrl = picture ? picture.path : '';
        User.findById(userId)
            .then(userDoc => {
                if (!userDoc) {
                    return res.status(404).send('User not found');
                }
                userDoc.name = name;
                userDoc.city = city;
                userDoc.address = address;
                userDoc.phone_number = phone_number;
                userDoc.description = description;
                userDoc.zakat_status = zakat_status;
                userDoc.status = status;
                if (imageUrl) {
                    userDoc.picture = imageUrl;
                }
                return userDoc.save();
            })
            .then(result => {
                req.flash('success', 'User updated successfully!');
                res.redirect('/admin/users/all');
            })
            .catch(err => {
                console.error(err);
                res.status(500).send('Server error');
            });
    }
};

exports.delete = (req, res, next) => {
    const userId = req.params.userId;

    User.findByIdAndDelete(userId)
    .then(user => {
        req.flash('success', 'User Deleted successfully!');
        res.redirect('/admin/users/all');
    })
}
