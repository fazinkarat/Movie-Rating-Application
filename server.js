const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const uri = "mongodb+srv://<username>:<password>@fazin1.2pmcicc.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database!');
});


const movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    genre: String,
    rating: Number,
    reviews: [String]
  });
  
const Movie = mongoose.model('Movie', movieSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/movies', function(req, res) {
  Movie.find(function(err, movies) {
    if (err) return console.error(err);
    res.json(movies);
  });
});

app.post('/api/movies', function(req, res) {
  const movie = new Movie({
    title: req.body.title,
    releaseYear: req.body.releaseYear,
    genre: req.body.genre,
    rating: req.body.rating,
    reviews: req.body.reviews
  });

  movie.save(function(err, movie) {
    if (err) return console.error(err);
    res.json(movie);
  });
});
app.get('/api/movies', function(req, res) {
    Movie.find(function(err, movies) {
      if (err) return console.error(err);
      res.json(movies);
    });
  });
  
  app.post('/api/movies', function(req, res) {
    const movie = new Movie({
      title: req.body.title,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
      rating: req.body.rating,
      reviews: req.body.reviews
    });
  
    movie.save(function(err, movie) {
      if (err) return console.error(err);
      res.json(movie);
    });
  });
  
  const port = process.env.PORT || 3000;
  app.listen(port, function() {
    console.log(`Server started on port ${port}`);
  });
  

  