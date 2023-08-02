const router = require('express').Router();
const typeRoutes = require('./type-routes.js');
router.use('/type', typeRoutes);
module.exports = router;