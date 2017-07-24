var _categories = {
    "category1": [
        { "id": 1, "name": "product1" },
        { "id": 2, "name": "product2" }
    ],
    "category2": [
        { "id": 3, "name": "product3" },
        { "id": 4, "name": "product4" }
    ]
}

var _currIndex = Object.keys(_categories).length + 1;

module.exports = {
    getCategoryNames: function () {
        return Object.keys(_categories);
    },
    getProductsByCategory: function (category) {
        return _categories[category];
    },
    createProduct: function (category, product) {
        if (!product.name) {
            throw 'product must have a name';
        }
        product.id = ++_currIndex;
        _categories[category].push(product);
    },
    deleteProduct: function (category, id) {
        _categories[category] = _categories[category].filter(function (product) {
            return product.id !== id;
        });
    },
    deleteCategory: function (category) {
        delete _categories[category];
    },
    createCategory: function (category) {
        if (!category.name) {
            throw 'category must have a name';
        }
        _categories[category.name] = [];
    }
};