const express = require('express');
const router = express.Router();
const { products: ctrl } = require('../controllers');

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);

module.exports = router;
