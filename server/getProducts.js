const products = require('../products.json')




const getProducts = (req, res) => {
    if(req.query.price) {
        const items = products.filter(el => el.price >= parseInt(req.query.price));
    }
    res.status(200).send(products)
};

module.exports = getProducts