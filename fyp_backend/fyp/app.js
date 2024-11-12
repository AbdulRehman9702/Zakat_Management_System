const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const session = require('express-session');
const MongoDbStore = require('connect-mongodb-session')(session);
// const csrf = require('csurf');
const flash = require('connect-flash');
const multer = require('multer');
const cors = require('cors');

const errorController = require('./controller/404controller');

const MONGODB_URI = 'mongodb+srv://waleednasrullah99:6vnEzb7E5PIvQjWl@cluster0.qm2naxc.mongodb.net/zakat';

const app = express();
const store = new MongoDbStore({
    uri: MONGODB_URI,
    collection: 'sessions'
})
// const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype == 'image/png' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg') {
        cb(null, true);
    } else {
        req.fileValidationError = 'Invalid file type. Only JPEG, JPG, and PNG are allowed.';
        cb(null, false);
    }
}

const adminRoutes = require("./routes/admin");
const adminAuthRoutes = require('./routes/adminAuth');
const apiRoutes = require('./routes/api');

app.use(bodyParser.urlencoded({extended: true}));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('picture'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(
    session({
        secret: 'my secret',
        resave: 'false',
        saveUninitialized: false,
        store: store
    })
)
// app.use(csrfProtection);
app.use(flash());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    if (req.session.user) { 
        res.locals.userId = req.session.user._id;
        res.locals.userName = req.session.user.name;
        res.locals.userRole = req.session.user.role;
    }
    next();
});

app.use(cors());
app.use('/admin', adminRoutes);
app.use('/admin', adminAuthRoutes);
app.use(apiRoutes);
app.use(errorController.get404);

mongoose.connect(MONGODB_URI)
.then(result => {
    app.listen(8000);
})
.catch(err => console.log(err));