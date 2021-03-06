const express = require('express');

const mainController = require('../controllers/main');

const router = express.Router();

router.get('/', mainController.getIndex);

router.get('/about-us', mainController.getAboutUs);

module.exports = router;
