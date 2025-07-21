const e = require('express');
const express = require('express');
const app = express();


app.use(express.json()); // Middleware to parse JSON bodies

let notes = [];

/* POST /notes => {title and content} */
app.post('/notes',(req, res)=>{
    console.log(req.body);

    notes.push(req.body);
    res.json({
        message: 'Note added successfully',

    });

})

/* GET /notes => [{title and content}] */
app.get('/notes', (req, res) => {
  res.json(notes);
});

/* delete /notes/:index */

app.delete('/notes/:index', (req, res) => {
  const index = req.params.index;

  delete notes[index];
    res.json({
        message: 'Note deleted successfully',
    });
});

/* PATCH  /notes/:index => {title} */
app.patch('/notes/:index', (req, res) => {
  const index = req.params.index;
  const {title} = req.body;
  
  notes[index].title = title;
  res.json({
    message: 'Note updated successfully',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});