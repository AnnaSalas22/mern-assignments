const JokesController = require('../controllers/jokes.controllers');

module.exports = (app) => {
    app.get("/api/jokes", JokesController.getAllJokes);
    app.post("/api/jokes", JokesController.createNewJokes);
    app.get("/api/jokes/:_id", JokesController.getJokesById);
    app.put("/api/jokes/:_id", JokesController.updateJokes);
    app.delete("/api/jokes/:_id", JokesController.deleteJokes);
};


