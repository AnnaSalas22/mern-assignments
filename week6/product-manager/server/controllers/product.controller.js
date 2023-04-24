const Product = require('../models/product.model');

module.exports. getAllProduct = (req,res)=> {
    Product.find({})
    .then ((allproduct) => {
    res.json({allproduct})
    })
    .catch((err) => {
        res.json ({message: 'Something went wrong', error:err })
});
};

// module.exports.getMyProduct  = (req,res) => {
//     const { params } = req;
//     Product.findOne({_id: params.id})
//     .then((MyProduct) => res.json(MyProduct))
//     .catch((err) => console.log(err));
// };



module.exports.getMyProduct  = (req,res) => {
    Product.findOne({_id: req.params.id})
    .then((MyProduct) => {res.status(200).json(MyProduct)})
    .catch((err) => { res.status (400).json(err)})
};

// module.exports.updateProduct  = (req,res) => {
//     Product.findOneAndUpdate({_id: req.params._id}, req.body, {
//         new:true,
//         runValidators: true,
//     })
//     .then((updatedProduct) => res.json(updatedProduct))
//     .catch((err) => console.log(err));
// };

// module.exports.deleteProduct= (req,res) => {
//     Product.deleteOne({_id: req.params._id})
//     .then((deleteThisProduct) => res.json(deleteThisProduct))
//     .catch((err) => console.log(err));
// };

module.exports. createNewProduct= (req,res) => {
    const { body } = req;
    Product.create(body)
        .then ((newProduct) => {
        res.json({newProduct})
    })
    .catch((err) => {
        res.json ({message: 'Something went wrong', error:err })
});
};
