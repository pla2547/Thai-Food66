// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

router.get('/', menuController.getHome);
router.get('/menu', menuController.getMenu);
router.get('/menu/:id', menuController.getMenuDetail);

// (เพิ่ม) เส้นทาง about
router.get('/about', menuController.getAbout);

module.exports = router;
