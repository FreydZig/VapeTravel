const Router = require('express');
const router = new Router();
const shopController = require('../controllers/shopController');

router.post('/add', shopController.create);
router.delete('/delete',);
router.get('/', shopController.getAll);
router.post('/update',);

module.exports = router;