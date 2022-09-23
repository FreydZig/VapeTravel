const Router = require('express');
const router = new Router();
const typeController = require('../controllers/typeController')

router.post('/add', typeController.create);
router.delete('/delete',);
router.get('/get',);
router.get('/all', typeController.getAll);
router.post('/update',);

module.exports = router;