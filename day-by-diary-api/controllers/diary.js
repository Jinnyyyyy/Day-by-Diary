const Diary = require('../models/diary')
const { response } = require('../server')


function index(req, res) {
    Diary.find({}, function(err, diary){
        res.json(diary)
    })
}

async function create(req, res) {
    const diary = new Diary(req.body)
    await diary.save()
    res.json(diary)
}


async function removeDiary(req, res) {
    console.log(req.params.id)
    const remove = await Diary.findByIdAndDelete(req.params.id)
    Diary.find({}, function(err, diary){
        res.json(diary)
    })
}

async function updateDiary(req, res) {
    console.log('we reached the update')
    console.log(req.body)
    await Diary.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function (diary) {
        res.status(200).json(diary);
    }).catch(function (err) {
        res.status(400).json(err);
    });
}


module.exports = {
    index,
    create,
    removeDiary,
    updateDiary
}



