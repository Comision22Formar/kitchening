const crypto = require('crypto');

function Product(name, address,url_map,description, category,mainImage, images) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.description = description.trim();
    this.address = address.trim();
    this.url_map = url_map.trim() || null;
    this.mainImage = mainImage ? mainImage[0].filename : null;
    this.images = images ? images.map(image => image.filename) : [];
    this.category = category;

}

module.exports = Product