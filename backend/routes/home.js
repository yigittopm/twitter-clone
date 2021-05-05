const router = require('express').Router();

const homeController = require("../controllers/home");

router.get('/', homeController.getAllTweets);
router.get('/:id', homeController.getOneTweet);

module.exports = router;