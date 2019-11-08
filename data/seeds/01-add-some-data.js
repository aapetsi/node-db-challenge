exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          ProjectName: 'Node API',
          Description: 'Coding Test',
          Completed: true
        },
        {
          ProjectName: 'Movie App',
          Description: 'Coding Test',
          Completed: false
        },
        { ProjectName: 'rowValue3', Description: 'Coding Test' }
      ]);
    });
};
