const bcryptjs = require('bcryptjs')
const crypto = require('crypto');

function User(name, surname, email, password,) {
    this.id =  crypto.randomUUID();
    this.name = name.trim();
    this.surname = surname.trim();
    this.email = email.trim();
    this.password = bcryptjs.hashSync(password.trim(), 10);
    this.role = "user";

}

module.exports = User