const { leerJSON, escribirJSON } = require("../../data");

module.exports = (req,res) => {

    const {name, address,url_map, description, category} = req.body;

    const {id} = req.params

    const products = leerJSON('products');

    const produtsUpdated = products.map(product => {
        if(product.id == id){
            product.name = name.trim();
            product.description = description.trim();
            product.address = address.trim();
            product.url_map = url_map.trim();
            product.mainImage = "img-pdto-1.jpg";
            product.images = [];
            product.category = category;
        }
        return product
    })

    escribirJSON(produtsUpdated, 'products')

    return res.redirect('/admin')


}