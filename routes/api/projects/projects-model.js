const db = require('../../../data/db-config');

module.exports = {
  getProjects,
  getProjectById
};

function getProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects').where({ ProjectId: id });
}
