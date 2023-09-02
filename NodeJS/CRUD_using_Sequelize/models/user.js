const Sequelize = require('sequelize'); //WE USES sequqlize's datatypes and not the provided ones,so change INTEGER and String to Sequelize.INTERGER and Sequelize.STRING.
const sequelize =require('../util/database');


const User = sequelize.define('user',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email: {
        type:Sequelize.STRING,
        allowNull:false
    },
    password: {
        type:Sequelize.STRING,
        allowNull:false
    },
    remark: Sequelize.STRING
}); //model name
//if model name is user than database name will be users.it automatically makes it pural.
module.exports =User;