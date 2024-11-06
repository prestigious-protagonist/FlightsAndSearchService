const express = require('express')
const router = express.Router();
// routes definition
const v1ApiRoutes = require('./v1/index')

router.use('/v1', v1ApiRoutes)

module.exports = router;