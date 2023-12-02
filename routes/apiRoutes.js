const router = require('express').Router();
const fs = require('fs');
const fileName = './db/db.json';

router.get('/notes', (req, res) => {
  const data = fs.readFileSync(fileName, 'utf8');
  const parsedData = JSOn.parse(data);
  res.status(200).json(parsedData);
});

router.post('./notes', (req, res) => {
  res.json('success');
});



module.exports = router;