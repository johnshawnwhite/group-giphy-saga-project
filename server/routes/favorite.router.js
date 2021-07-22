const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const id = req.params.id;
  const search = req.params.search
  const sqlText = 'SELECT * FROM "category ORDER BY "id" DESC'

  pool.query(sqlText)
  .then(result => {
    res.send(result.rows);
  }).catch(error => {
    console.log("Error getting Categories", error);
  })
  
});

// add a new favorite
router.post('/', (req, res) => {
  const{} = req.body;
  let sqlText = `INSERT INTO "favorite" ("category")
                VALUES ($1)`;
  pool.query(sqlText, [category])
  .then(result => {
  res.sendStatus(200);
  }).catch(error => {
    console.log("Error adding favorite", error);
  })
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const id = req.params.id;
  let sqlText = `UPDATE "feedback"
                WHERE "id" = $1`;
  pool.query(sqlText, [id])
  .then(result => {
    res.sendStatus(202);
  }).catch(error => {
    console.log("error giving category id", error)
  })
  
  
});

// delete a favorite
router.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  let sqlText = `DELETE FROM "feedback"
              WHERE "id" = $1`;
  pool.query(sqlText, [id])
  .then(result => {
    res.sendStatus(202);
  }).catch(error => {
    console.log("error deleting favorite", error)
  })
});

module.exports = router;
