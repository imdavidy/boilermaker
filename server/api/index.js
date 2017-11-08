const router = require('express').Router();

router.get('/', function (req, res, next) {
  res.send('You\'ve hit API route')
})
router.get('*', function (req, res, next) {
  res.send('404')
})

module.exports = router;