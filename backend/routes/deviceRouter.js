const express = require('express');

const router = express.Router();
const DeviceRouter = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), DeviceRouter.create);
router.get('/', DeviceRouter.getAll);
router.get('/:id', DeviceRouter.getOne);

module.exports = router;