var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/express', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var links = [
  { title: 'Fake Link 1', url: 'www.fake1.com' },
  { title: 'Fake Link 2', url: 'www.fake2.com' },
  { title: 'Fake Link 3', url: 'www.fake3.com' },
  { title: 'Fake Link 4', url: 'www.fake4.com' }
]

router.get('/api/links', function(req, res, next) {
  res.send({ links: links });
});

router.post('/api/links', function(req, res, next){
  var newLink = req.body;

  links.push(newLink);

  res.send(newLink);
})

module.exports = router;
