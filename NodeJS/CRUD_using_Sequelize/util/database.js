const Sequelize = require('sequelize');

const sequelize=new Sequelize("triweb","root","",{ //database,user,password
    dialect:"mysql",
    host:"localhost"
});


module.exports = sequelize;