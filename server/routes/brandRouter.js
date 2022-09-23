const Router = require('express');
const router = new Router();
const brandController = require('../controllers/brandController');

router.post('/add', brandController.create);
router.delete('/delete',);
router.get('/get',);
router.get('/all', brandController.getAll);
router.post('/update',);

module.exports = router;