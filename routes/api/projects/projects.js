const express = require('express');
const router = express();
const Projects = require('./projects-model');
router.get('/test', (req, res) => {
  res.status(200).json({ message: 'Projects route works' });
});

// get all projects
router.get('/', (req, res) => {
  Projects.getProjects()
    .then(projects => {
      if (!projects) {
        return res.status(404).json({ message: 'No projects found' });
      }
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Unable to retrieve the projects: ${err.message}`
      });
    });
});

// get project by id
router.get('/:id', (req, res) => {
  Projects.getProjectById(req.params.id)
    .then(project => {
      if (!project || project.length === 0) {
        return res
          .status(404)
          .json({ message: 'No project with the given id was found' });
      }
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        errorMessage: `Unable to retrieve the projects: ${err.message}`
      });
    });
});

module.exports = router;
