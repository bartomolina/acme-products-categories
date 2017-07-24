var db = require('../db.js');
var router = require('express').Router();

module.exports = router;

router.get('/:name/products', function (req, res, next) {
    res.render('products', {
        "categories": db.getCategoryNames(),
        "currentCategory": req.params.name,
        "products": db.getProductsByCategory(req.params.name)
    });
});

router.post('/', function (req, res, next) {
    db.createCategory(req.body);
    res.redirect('/categories/' + req.body.name + '/products');
});

router.delete('/:name', function (req, res, next) {
    db.deleteCategory(req.params.name);
    res.redirect('/');
});

router.post('/:name/products', function (req, res, next) {
    db.createProduct(req.params.name, req.body);
    res.redirect('/categories/' + req.params.name + '/products');
});

router.delete('/:name/products/:id', function (req, res, next) {
    db.deleteProduct(req.params.name, +req.params.id);
    res.redirect('/categories/' + req.params.name + '/products');
});