var express = require('express');
var router = express.Router()
const diarysCtrl = require('../controllers/diary')

router.get('/data', diarysCtrl.index)
router.post('/sumDiary', diarysCtrl.create)
router.delete('/delete/:id', diarysCtrl.removeDiary)
router.put('/update/:id', diarysCtrl.updateDiary)

module.exports = router;


