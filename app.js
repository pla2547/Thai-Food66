// app.js
const express = require('express');
const path = require('path');

const menuRoutes = require('./routes/menuRoutes');

const app = express();

// ตั้งค่า EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// เปิดใช้ static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// เส้นทางหลัก
app.use('/', menuRoutes);

// ใช้ PORT จาก environment (Render จะกำหนดให้)
const PORT = process.env.PORT || 3000;

// เริ่มรันเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
