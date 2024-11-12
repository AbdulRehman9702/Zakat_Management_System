const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const Admin = require('../models/admin');

exports.edit = (req, res, next) => {
    const adminId = req.params.adminId;

    let message = req.flash('success');

    if (message.length > 0) {
        message = message[0];
    } else {
        message = null;
    }
    
    Admin.findById(adminId)
    .then(admin => {
        res.render('profile/edit', {
            admin: admin,
            pageTitle: "Edit Profile | Zakat System",
            path: '/profile/edit',
            errorMessage: [],
            message: message
        });
    })
    .catch(err => console.log(err));
}

exports.update = (req, res, next) => {
    const adminId = req.params.adminId;
    const { name, username, email, password, role, status } = req.body;

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(422).render('profile/edit', {
            pageTitle: "Edit Profile | Zakat System",
            path: '/profile/edit',
            errorMessage: errors.array(),
            admin: {
                _id: adminId,
                name: name,
                email: email,
                username: username,
                role: role,
                status: status,
            },
            message: null,
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
                admin.role = role ? role : admin.role;
                admin.status = status ? status : admin.status;
                return admin.save();
            })
            .then(result => {
                req.flash('success', 'Profile updated successfully!');
                res.redirect('/admin/profile/'+ adminId +'/edit');
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
            admin.role = role ? role : admin.role;
            admin.status = status ? status : admin.status;
            return admin.save();
        })
        .then(result => {
            req.flash('success', 'Profile updated successfully!');
            res.redirect('/admin/profile/'+ adminId + '/edit');
        })
        .catch(err => console.log(err));
    }
}