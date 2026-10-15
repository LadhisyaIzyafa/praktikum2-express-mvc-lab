
const express = require('express');
const router = express.Router();

const pageController = require('../controllers/page.controller.js');

router.get('/', pageController.getBeranda);
router.get('/katalog', pageController.getKatalog);
// Tambahkan di bawah router GET sebelumnya 
router.post('/katalog/tambah', pageController.postTambahProduk); 
module.exports = router;
