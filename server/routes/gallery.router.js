const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');//for BASE MODE:
const galleryItems = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route--BASE MODE:
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route--BASE MODE:
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET Route to database:
router.get('/', (req, res)=>{
    console.log('in router GET');
    const queryString = `SELECT * FROM gallery ORDER BY id ASC;`;
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
});

// PUT Route to database:
router.put('/like', (req, res) => {
    console.log('in router PUT', req.query.id);
    const values = [req.query.id];
    const queryString = `UPDATE gallery SET likes = likes + 1 WHERE id=$1;`;
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })   
});

// DELETE Route to database:
router.delete('/delete', (req, res)=>{
    console.log('in router DELETE:', req.query.id);
    const queryString = `DELETE FROM gallery WHERE id=$1;`
    const values = [req.query.id];
    pool.query(queryString, values).then((results)=>{
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
});

// POST route to database:
router.post('/', (req, res)=>{
    console.log('in router POST:', req.body);
    const queryString = `INSERT INTO gallery (path, title, description) VALUES($1, $2, $3);`;
    const values = [req.body.path, req.body.title, req.body.description];
    pool.query(queryString, values).then((result)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;