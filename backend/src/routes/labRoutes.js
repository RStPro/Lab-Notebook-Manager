const express = require('express');
   const { createLabEntry, getLabEntries } = require('../controllers/labController');
   const router = express.Router();
   const { verifyToken } = require('../middlewares/authMiddleware');

   router.post('/', verifyToken, createLabEntry);
   router.get('/', verifyToken, getLabEntries);

   module.exports = router;