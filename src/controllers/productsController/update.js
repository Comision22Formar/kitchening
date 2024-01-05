const { validationResult } = require("express-validator");
const { leerJSON, escribirJSON } = require("../../data");
const { existsSync, unlinkSync } = require('fs');
const categories = require('../../data/categories.json');


module.exports = (req,res) => {

    const {name, address,url_map, description, category} = req.body;

    const {id} = req.params;

    const mainImage = req.files.mainImage;
    const images = req.files.images;

    const products = leerJSON('products');

    const errors = validationResult(req);

    if(errors.isEmpty()){

    const produtsUpdated = products.map(product => {
        if(product.id == id){
            
            (mainImage && existsSync('public/images/' + product.mainImage)) && unlinkSync('public/images/' + product.mainImage)
            
            if(images){
                product.images.forEach(image => {
                    existsSync('public/images/' + image) && unlinkSync('public/images/' + image)
                });
            } 

            product.name = name.trim();
            product.description = description.trim();
            product.address = address.trim();
            product.url_map = url_map.trim();
            product.mainImage = mainImage ? mainImage[0].filename : product.mainImage;
            product.images = images ? images.map(image => image.filename) : product.images;
            product.category = category;

        }
        return product
    });



    escribirJSON(produtsUpdated, 'products')

    return res.redirect('/admin')
}else{
    (mainImage && existsSync('public/images/' + mainImage.filename)) && unlinkSync('public/images/' + mainImage.filename)
    
    if(images){
        images.images.forEach(image => {
            existsSync('public/images/' + image) && unlinkSync('public/images/' + image)
        });
    } 

    const product = products.find(product => product.id == id);

    return res.render('products/product-edit',{
        errors : errors.mapped(),
        ...product,
        categories
    })
}


}