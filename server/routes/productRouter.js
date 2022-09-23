const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController')

router.post('/add', productController.create);
router.delete('/delete',);
router.get('/get',);
router.post('/update',);

module.exports = router;