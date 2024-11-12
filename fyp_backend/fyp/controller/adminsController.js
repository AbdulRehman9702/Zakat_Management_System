const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const Admin = require('../models/admin');

exports.index = (req, res, next) => {
    let message = req.flash('success');
    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }

    const admin_id = req.session.user._id;

    Admin.find({ _id: {$ne: admin_id} })
    .then(admins => {
        res.render('admins/index', {
            admins: admins,
            pageTitle: "Admins | Zakat System",
            path: '/adminUsers/all',
            message: message,
        });
    })
    .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    res.render('admins/create', {
        pageTitle: "Create Admin | Zakat System",
        path: '/adminUsers/create',
        errorMessage: [],
        oldInput: {
            name: "",
            username: "",
            email: ""
        }
    });
}

exports.store = (req, res, next) => {
    const { name, username, email, password, role, status } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('admins/create', {
            pageTitle: "Create Admin | Zakat System",
            path: '/adminUsers/create',
            errorMessage: errors.array(),
            oldInput: {
                name: name,
                email: email,
                username: username
            }
        });
    }

    bcrypt.hash(password, 12)
    .then(hashedPassword => {
        const admin = new Admin({
            name: name,
            username: username,
            email: email,
            password: hashedPassword,
            role: role,
            status: status
        });
        return admin.save()
    })
    .then(result => {
        req.flash('success', 'Admin created successfully!');
        res.redirect('/admin/adminUsers/all');
    })
    .catch(err => console.log(err));
}

exports.edit = (req, res, next) => {
    const adminId = req.params.adminId;
    Admin.findById(adminId)
    .then(admin => {
        res.render('admins/edit', {
            admin: admin,
            pageTitle: "Edit Admin | Zakat System",
            path: 'adminUsers',
            errorMessage: [],
        });
    })
    .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    const adminId = req.params.adminId;
    const { name, username, email, password, role, status } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('admins/edit', {
            pageTitle: "Edit Admin | Zakat System",
            path: 'adminUsers',
            errorMessage: errors.array(),
            admin: {
                _id: adminId,
                name: name,
                email: email,
                username: username,
                role: role,
                status: status,
            }
        });
    }

    if(password) {
        bcrypt.hash(password, 12)
        .then(hashedPassword => {
            Admin.findById(adminId)
            .then(admin => {
                admin.name = name;
                admin.username = username;
                admin.email = email;
                admin.password = hashedPassword;
                admin.role = role;
                admin.status = status;
                return admin.save();
            })
            .then(result => {
                console.log(result);
                res.redirect('/admin/adminUsers/all');
            })
            .catch(err => console.log(err));
        }) 
        .catch(err => console.log(err));
    } else {
        Admin.findById(adminId)
        .then(admin => {
            admin.name = name;
            admin.username = username;
            admin.email = email;
            // admin.password = password;
            admin.role = role;
            admin.status = status;
            return admin.save();
        })
        .then(result => {
            console.log(result);
            res.redirect('/admin/adminUsers/all');
        })
        .catch(err => console.log(err));
    }
}

exports.delete = (req, res, next) => {
    const adminId = req.params.adminId;
    Admin.findByIdAndDelete(adminId)
    .then(admin => {
        res.redirect('/admin/adminUsers/all');
    })
    .catch(err => console.log(err));
}