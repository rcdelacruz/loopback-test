module.exports = function(app) {
  app.dataSources.mysql.automigrate('Books', function(err) {
    if (err) throw err;

    app.models.Books.create([{
      name: 'Bel Cafe',
      author: 'Vancouver'
    }, {
      name: 'Three Bees Coffee House',
      author: 'San Mateo'
    }, {
      name: 'Caffe Artigiano',
      author: 'Vancouver'
    }, ], function(err, books) {
      if (err) throw err;

      console.log('Models created: \n', books);
    });
  });
};
