const db = require('../models'); // new require for db object
const express = require('express');
const router = express.Router();

/* GET tournaments listing. */
router.get('', (req, res) => {
  return db.Tournament.findAll()
    .then((tournaments) => res.send(tournaments))
    .catch((err) => {
      console.log('There was an error querying tournaments', JSON.stringify(err))
      return res.send(err)
    });
});

module.exports = router;
