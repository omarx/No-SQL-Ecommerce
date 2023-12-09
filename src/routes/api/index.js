const userRoutes=require('./userRoutes');
const thoughtsRoutes=require('./thoughtsRoute');
const router=require('express').Router();

router.use('/users',userRoutes);
router.use('/thoughts',thoughtsRoutes);

module.exports=router;