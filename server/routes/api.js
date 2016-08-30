const express = require('express');
const router = express.Router();

router.use('/albums', require('./albums'));
router.use('/pics', require('./pics'));

module.exports = router;
