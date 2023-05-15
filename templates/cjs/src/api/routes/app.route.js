const express = require('express');
const { getAppController} = require('../controllers/app.controller');

const router = express.Router();

router.get('/', getAppController);

module.exports = router;
