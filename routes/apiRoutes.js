const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const fileName = path.join(__dirname, '../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const parsedData = JSON.parse(data);
    res.status(200).json(parsedData);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).send('Internal server error');
  }
});

router.post('/notes', (req, res) => {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const notes = JSON.parse(data);
    const { title, text } = req.body;
    const newNote = {
      id: uuidv4(),
      title,
      text,
    }
    notes.push(newNote);
    fs.writeFileSync(fileName, JSON.stringify(notes, null, 2));
    res.status(200).json(parsedData);
    res.json('success').json(newNote);
  } catch (error) {
    console.error('Error adding note:', error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;