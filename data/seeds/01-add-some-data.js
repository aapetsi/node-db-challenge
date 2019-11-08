exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          ProjectName: 'Node API',
          ProjectDescription: 'Coding Test',
          Completed: true
        },
        {
          ProjectName: 'Movie App',
          ProjectDescription: 'Coding Test',
          Completed: false
        },
        {
          ProjectName: 'rowValue3',
          ProjectDescription: 'Coding Test',
          Completed: ''
        }
      ]);
    });
};
