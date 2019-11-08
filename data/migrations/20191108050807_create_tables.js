exports.up = function(knex) {
  return knex.schema
    .createTable('projects', projects => {
      // create primary key
      projects.increments('ProjectId');
      projects
        .string('ProjectName')
        .unique()
        .notNullable();
      projects.text('ProjectDescription');
      projects
        .boolean('Completed')
        .notNullable()
        .defaultTo(false);
    })
    .createTable('resources', resources => {
      resources.increments('ResourceId');
      resources
        .string('ResourceName')
        .unique()
        .notNullable();
      resources.text('ResourceDescription');
    })
    .createTable('tasks', tasks => {
      tasks.increments('TaskId');
      tasks
        .string('TaskDescription')
        .unique()
        .notNullable();
      tasks.string('Notes');
      tasks.boolean('Completed').defaultTo(0).notNullable;
      tasks
        .integer('project_id')
        .notNullable()
        .references('ProjectId')
        .inTable('projects');
    })
    .createTable('project_resources', table => {
      table.primary(['project_id', 'resource_id']);
      table
        .integer('project_id')
        .notNullable()
        .references('ProjectId')
        .inTable('projects');
      table
        .integer('resource_id')
        .notNullable()
        .references('ResourceId')
        .inTable('resources');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects');
};
