// controllers/menuController.js
const menu = require('../models/menuModel');

exports.getHome = (req, res) => {
  res.render('pages/index', { title: 'สารสนเทศอาหารไทย' });
};

exports.getMenu = (req, res) => {
  res.render('pages/menu', { title: 'เมนูอาหาร', menu });
};

exports.getMenuDetail = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = menu.find(m => m.id === id);
  if (item) {
    res.render('pages/menuDetail', { title: item.name, item });
  } else {
    res.status(404).send('ไม่พบเมนู');
  }
};

// (เพิ่ม) หน้า about
exports.getAbout = (req, res) => {
  res.render('pages/about', { title: 'ผู้พัฒนา' });
};
