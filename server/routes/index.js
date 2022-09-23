const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const productRouter = require('./productRouter');
const shopRouter = require('./shopRouter');
const typeRouter = require('./typeRouter');

router.use('/user', userRouter);
router.use('/brand', brandRouter);
router.use('/product',productRouter);
router.use('/shop',shopRouter);
router.use('/type',typeRouter);

module.exports = router;