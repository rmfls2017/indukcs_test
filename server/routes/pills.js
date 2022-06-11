const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Pill } = require('../models/Pill');
const { History } = require('../models/History');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

router.post('/', (req, res) => {
    let limit = req.body.limit ? parseInt(req.body.limit) : 20; // parseInt 숫자로 변경
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;
    let term = req.body.searchTerm;

    let findArgs = {};

    for(let key in req.body.filters) {
        if(req.body.filters[key].length > 0) {
            findArgs[key] = req.body.filters[key]
        }
    }

    if (term) {
        const { filterTerm, filterColors, filterShapes } = [term, findArgs['color'], findArgs['shape']];
        const history = new History({
            title: filterTerm,
            color: filterColors,
            shape: filterShapes,
        });
        Pill.find(findArgs)
            .find({$text: {$search: term }})
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((err, items) => {
                if(err) return res.status(400).json({success: false, err})
                return res.status(200).json({success: true, items,
                    postSize: items.length
                })
            })
    } else {
        Pill.find(findArgs)
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((err, items) => {
                if(err) return res.status(400).json({success: false, err})
                return res.status(200).json({success: true, items,
                    postSize: items.length
                })
            })

    }
});

router.get('/:id', (req, res) => {
    Pill.find({_id: req.params.id})
        .populate('writer')
        .exec((err, item) => {
            if(err) return res.status(400).send(err)
            return res.status(200).send({success:true, item})
        });
});

router.post('/', (req, res) => {
    const pill = new Pill(req.body);
    pill.save((err) => {
        if(err) return res.status(400).json({success: false, err})
        return res.status(200).json({success: true})
    });
});

module.exports = router;
