const express = require('express');

const router = express.Router();
const DeviceRouter = require('../controllers/deviceController');

router.post('/', DeviceRouter.create);
router.get('/', DeviceRouter.getAll);
router.get('/:id', DeviceRouter.getOne);    

module.exports = router;