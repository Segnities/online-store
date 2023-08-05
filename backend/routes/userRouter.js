const express = require('express');

const router = express.Router();

router.post('/registration');
router.post('/login');
router.get('/auth', (req, res) => {
    res.json({ message: 'Auth success!' })
});


module.exports = router;