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
    console.log("Error getting Favorites", error);
  })
});

// add a new favorite
router.post('/', (req, res) => {
  const newFavorite = req.body;
  let sqlText = `INSERT INTO "favorite" ("name", url)
                VALUES ($1, $ 2)`;
  pool.query(sqlText, [newFavorite])
  .then(result => {
    res.sendStatus(200);
  }).catch(error => {
    console.log("Error adding favorite", error);
  })
});

// update given favorite with a category id
router.put('/:favId', async (req, res) => {
  const client = await pool.connect();
  try{
    // req.body should contain an array of category ids to add to this favorite image
    const ids = req.body.ids;
    const favId = req.params.favId;
    let sqlText = `INSERT INTO "favorite_category" ("favorite_id", "category_id")
                  VALUES ($1, $2);`;

    await client.query('BEGIN')

    await Promise.all(ids.map(categoryId =>{
      return client.query(sqlText, [favId, categoryId]);
    }))

    await client.query('COMMIT')
    res.sendStatus(202);
  } catch (error){
    pool.query('ROLLBACK')
    console.log("error giving category", error);
    res.sendStatus(500);
  }finally {
    client.release()
  }
});

// delete a favorite
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  let sqlText = `DELETE FROM "favorite"
              WHERE "id" = $1`;
  pool.query(sqlText, [id])
  .then(result => {
    res.sendStatus(202);
  }).catch(error => {
    console.log("error deleting favorite", error)
  })
});

module.exports = router;
