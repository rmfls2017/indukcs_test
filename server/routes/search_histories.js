const express = require('express');
const router = express.Router();
const { History } = require('../models/History');


router.get('/', (req, res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 20; // parseInt 숫자로 변경
    let skip = req.query.skip ? parseInt(req.query.skip) : 0;

    History.find()
        .skip(skip)
        .limit(limit)
        .sort({ "createdAt": -1 })
        .exec((err, items) => {
            if(err) {
                return res.status(400).json({success: false, err})
            }

            return res.status(200).json({
                success: true, items
            });
        });
});

router.post('/', (req, res) => {
    let term = req.body.searchTerm;

    let findArgs = {};
    let filters = [];
    if (!!req.body.filters) {
        filters = JSON.parse(req.body.filters);
    }

    for(let key in filters) {
        if(filters[key].length > 0) {
            findArgs[key] = filters[key]
        }
    }

    const history = new History({
        title: term,
        color: findArgs.color,
        shape: findArgs.shape,
    });

    if (!term) {
        return res.status(200).json({});
    }

    history.save((err) => {
        if(err) {
            return res.status(400).json({success: false, err});
        }

        return res.status(201).json({
            success: true
        });
    });
});

router.delete('/:id', (req, res) => {
    History.deleteOne({_id: req.params.id})
        .exec((err) => {
            if(err) {
                return res.status(400).send(err);
            }

            return res.status(200).send({
                success:true
            });
        });
});

module.exports = router;
