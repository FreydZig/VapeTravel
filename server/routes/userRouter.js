const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController')

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.delete('/delete',);
router.get('/auth', userController.check);
router.post('/update',);

module.exports = router;