const express = require('express');

const router = express.Router();
const DeviceRouter = require('../controllers/deviceController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), DeviceRouter.create);
router.get('/', DeviceRouter.getAll);
router.get('/:id', DeviceRouter.getOne);

router.put('/:id', checkRoleMiddleware('ADMIN'), DeviceRouter.update);
router.delete('/:id', checkRoleMiddleware('ADMIN'), DeviceRouter.delete);


module.exports = router;