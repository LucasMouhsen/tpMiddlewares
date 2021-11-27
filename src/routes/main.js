const express = require('express');
const router = express.Router();
const {index, login, register, admin, detail, products} = require('../controllers/mainController');
const adminCheck = require('../middlewares/adminCheck')

router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', index)
router.get('/login', login)
router.get('/register', register)
router.get('/admin', adminCheck, admin)
router.get('/detail', detail)
router.get('/products', products)


module.exports = router;