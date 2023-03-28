const express = require('express');
const router = express.Router();
const { products: ctrl } = require('../controllers');

router.get('/', ctrl.getAll);
router.post('/', ctrl.add);
router.get('/:id', ctrl.getById);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;
