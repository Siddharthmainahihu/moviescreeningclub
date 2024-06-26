const express = require('express');
const QRController = require('../controllers/QR.controller');
const router = express.Router();

router.post('/saveQR', QRController.addQR);
router.post('/send-email',QRController.sendQR);
router.get('/:email', QRController.getValidQRs);
router.put('/markUsed/:paymentId',QRController.markQRUsed);
router.get('/qrData/:paymentId',QRController.isQRUsed);
router.post('/sendEmail', QRController.sendEmail);
module.exports = router;