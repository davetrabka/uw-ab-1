const router = require('express').Router();
const { Review } = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Review.findAll()
    .then(reviews => res.json(reviews))
    .catch(next);
});

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.json(newReview);
  } catch (error) {
    console.loog(error);
  }
});
