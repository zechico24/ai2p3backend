var Sequelize = require('sequelize');
const sequelize = new Sequelize(
'ddt75b1hm23i8n',
'cwyfwqmqcvgaim',
'5bf2d5db3cfb332df5ea218d55825e82e29546a35a65276937363e2ca3948e58',
{
host: 'ec2-63-32-248-14.eu-west-1.compute.amazonaws.com',
port: '5432',
dialect: 'postgres'
}
);
module.exports = sequelize;