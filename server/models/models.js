const sequelize = require('../db');
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    first_name: {type: DataTypes.STRING},
    last_name: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
});

const Shop = sequelize.define('shop', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
   location: {type: DataTypes.STRING, unique: true},
   schedule: {type: DataTypes.STRING}
});

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
});

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true}
});

const Product = sequelize.define('product', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING}
})

const ProductsShops = sequelize.define('products_shops', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    quantity: {type: DataTypes.INTEGER, defaultValue: 0}
})

Type.hasMany(Product)
Product.belongsTo(Type)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Product.belongsToMany(Shop, {through: ProductsShops})
Shop.belongsToMany(Product, {through: ProductsShops})

module.exports = {
    User,
    Shop,
    Type,
    Brand,
    Product,
    ProductsShops
}