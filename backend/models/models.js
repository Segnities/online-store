const { DataTypes } = require('sequelize');

const db = require('../db.js');

const User = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: {type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "USER"} 
});

const Basket = db.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const BasketDevice = db.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});


const Device = db.define('device', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: {type: DataTypes.STRING, allowNull: false }
});

const Type = db.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Brand = db.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = db.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }, 
});

const DeviceInfo = db.define('device_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
});

