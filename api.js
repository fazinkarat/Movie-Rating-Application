fetch('/api/movies', {
    headers: {
      'Authorization': 'Bearer m8nnIE1KmAQbMYgUQ2ssmL8aSCi6ZPPg6KzABazrLAYVw2k142OZa6CzNdC6MNTm'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Process the list of movies
  })
  .catch(error => console.error(error));
  