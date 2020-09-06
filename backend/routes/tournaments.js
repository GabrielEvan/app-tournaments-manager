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

/* DELETE tournament */
router.delete('/:id', (req, res) => {
  return db.Tournament.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => res.send())
    .catch((err) => {
      console.log('There was an error while deleting tournament', JSON.stringify(err))
      return res.send(err)
    })
});


/* POST create tournament */
router.post('', (req, res) => {
  return db.Tournament.create({
    id: req.body.id,
    name: req.body.name,
    players: req.body.players
  })
    .then(() => res.send())
    .catch((err) => {
      console.log('There was an error while creating tournament', JSON.stringify(err))
      return res.send(err)
    });
});


module.exports = router;
