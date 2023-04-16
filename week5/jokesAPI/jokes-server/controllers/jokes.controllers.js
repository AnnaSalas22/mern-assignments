const Jokes = require('../models/jokes.model');

module.exports. getAllJokes = (req,res)=> {
    Jokes.find()
    .then ((allJokes) => {
    res.json({allJokes})
    })
    .catch((err) => {
        res.json ({message: 'Something went wrong', error:err })
});
};

module.exports.getJokesById  = (req,res) => {
    const { params } = req;
    Jokes.findOne({_id: params._id})
    .then((jokes) => res.json(jokes))
    .catch((err) => console.log(err));
};

module.exports.updateJokes  = (req,res) => {
    Jokes.findOneAndUpdate({_id: req.params._id}, req.body, {
        new:true,
        runValidators: true,
    })
    .then((updatedJokes) => res.json(updatedJokes))
    .catch((err) => console.log(err));
};

module.exports. deleteJokes= (req,res) => {
    Jokes.deleteOne({_id: req.params._id})
    .then((deleteThisJoke) => res.json(deleteThisJoke))
    .catch((err) => console.log(err));
};



module.exports. createNewJokes= (req,res) => {
    const { body } = req;
    Jokes.create(body)
        .then ((newJokes) => {
        res.json({newJokes})
    })
    .catch((err) => {
        res.json ({message: 'Something went wrong', error:err })
});
};

// const getAllJokes = (req,res)=> {
//     Jokes.find()
//     .then ((allJokes) => res.json(allJokes))
//     .catch((err) => console.log(err));
// };

// const getJokesById=(req,res) => {
//     const { params } = req;
//     Jokes.findOne({_id: params._id})
//         .then ((Jokes) => res.json(Jokes)) 
//         .catch((err) => console.log(err));
// };

// const createNewJoke = (req,res) => {
//     const { body } = req;
//     Jokes.create(body)
//     .then((newJokes)=> res.json(newJokes))
//     .catch((err) => console.log (err));
// };

// module.exports ={
//     getAllJokes,
//     getJokesById,
//     createNewJoke,
// };

