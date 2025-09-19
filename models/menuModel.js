// models/menuModel.js
const menu = [
  {
    id: 1,
    name: 'ส้มตำไทย',
    category: 'ยำ/สลัด',
    price: 40,
    description: 'ส้มตำรสดั้งเดิม เปรี้ยว เผ็ด เค็ม หวาน',
    ingredients: 'มะละกอดิบ มะเขือเทศ ถั่วฝักยาว พริกขี้หนู กุ้งแห้ง น้ำปลา',
    cookingTime: 10,
    difficulty: 'ง่าย',
    region: 'อีสาน',
    image: '/images/som-tam.jpg'
  },
  {
    id: 2,
    name: 'ต้มยำกุ้ง',
    category: 'ต้ม/แกง',
    price: 120,
    description: 'ต้มยำรสจัดจ้าน เปรี้ยว เผ็ด เค็ม หวาน กับกุ้งแม่น้ำ',
    ingredients: 'กุ้งแม่น้ำ ตะไคร้ ใบมะกรูด ข่า พริกแห้ง มะนาว',
    cookingTime: 20,
    difficulty: 'ปานกลาง',
    region: 'กลาง',
    image: '/images/tom-yum.jpg'
  },
  {
    id: 3,
    name: 'ผัดไทย',
    category: 'อาหารคาว',
    price: 80,
    description: 'เส้นผัดไทยรสเปรี้ยวหวาน เสิร์ฟพร้อมกุ้งสดและถั่วงอก',
    ingredients: 'เส้น กุ้ง ไข่ หน่อไม้ฝรั่ง ถั่วงอก น้ำตาลปี๊บ',
    cookingTime: 15,
    difficulty: 'ง่าย',
    region: 'กลาง',
    image: '/images/pad-thai.jpg'
  },
  {
    id: 4,
    name: 'ข้าวไก่ทอด',
    category: 'อาหารจานเดียว',
    price: 60,
    description: 'ข้าวไก่ทอดร้อนๆ',
    ingredients: 'ข้าวสวย ไก่ทอด น้ำมันพืช เครื่องปรุงรส',
    cookingTime: 15,
    difficulty: 'ง่าย',
    region: 'กลาง',
    image: '/images/fried-chicken-rice.jpg'
  }
];

module.exports = menu;
