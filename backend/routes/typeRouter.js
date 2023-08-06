const express = require('express');

const router = express.Router();
const TypeController = require('../controllers/typeController');

router.post('/', TypeController.create);
router.get('/');


module.exports = router;