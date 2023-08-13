const express = require('express');

const router = express.Router();
const TypeController = require('../controllers/typeController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/', checkRoleMiddleware('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);
router.delete('/:id', checkRoleMiddleware('ADMIN'), TypeController.delete);
router.put('/:id', checkRoleMiddleware('ADMIN'), TypeController.update);

module.exports = router;