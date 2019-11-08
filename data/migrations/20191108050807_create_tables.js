exports.up = function(knex) {
  return knex.schema.createTable('projects', projects => {
    // create primary key
    projects.increments('ProjectId');

    projects.string('ProjectName');
    projects.string('Description');
    projects.boolean('Completed').defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
