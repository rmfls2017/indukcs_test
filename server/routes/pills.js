const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Pill } = require('../models/Pill');
const { History } = require('../models/History');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage }).single("file")

router.get('/', (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 20; // parseInt 숫자로 변경
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;
    let term = req.query.searchTerm;

    let findArgs = {};
    let filters = [];
    if (!!req.query.filters) {
        filters = JSON.parse(req.query.filters);
    }

    for(let key in filters) {
        if(filters[key].length > 0) {
            findArgs[key] = filters[key]
        }
    }

    if (term) {
        // const history = new History({
        //     title: term,
        //     color: findArgs.color,
        //     shape: findArgs.shape,
        // });

        // history.save();

        Pill.find(findArgs)
            .find({$text: {$search: term }})
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((err, items) => {
                if(err) {
                    return res.status(400).json({success: false, err});
                }

                return res.status(200).json({success: true, items,
                    postSize: items.length
                });
            });
    } else {
        Pill.find(findArgs)
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((err, items) => {
                if(err) {
                    return res.status(400).json({success: false, err});
                }
                return res.status(200).json({success: true, items,
                    postSize: items.length
                });
            })
    }
});

router.post('/image', (req, res) => {
    //가져온 이미지 저장 
    upload(req, res, err => {
        if(err){
            return res.json({success: false, err});
        }

        return res.json({success: true, filePath: res.req.file.path, fileName: res.req.file.filename});
    })
    
});

router.post('/', (req, res) => {
    const pill = new Pill(req.body);
    pill.save((err) => {
        if(err) {
            return res.status(400).json({success: false, err});
        }

        return res.status(200).json({success: true});
    });
});

router.get('/:id', (req, res) => {
    Pill.find({_id: req.params.id})
        .populate('writer')
        .exec((err, item) => {
            if(err) {
                return res.status(400).send(err);
            }
            
            return res.status(200).send({success:true, item});
        });
});

module.exports = router;
