
exports.seed = function(knex) {
  // Deletes ALL existing entries use truncate
  return knex('characters').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, name: 'Bob', gender: 'male', imageUrl: 'https/pixum.photos/200'},
        {id: 2, name: 'Ralph', gender: 'male', imageUrl: 'https/pixum.photos/200'},
        {id: 3, name: 'Mary', gender: 'female', imageUrl: 'https/pixum.photos/200'},
        {id: 4, name: 'Jane', gender: 'female', imageUrl: 'https/pixum.photos/200'}
      ]);
    });
};
