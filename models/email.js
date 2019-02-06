'use strict';
module.exports = (sequelize, DataTypes) => {
  const mail = sequelize.define('email', {
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    cc: DataTypes.STRING,
    bcc: DataTypes.STRING,
    subject: DataTypes.STRING,
    text: DataTypes.STRING,
    html: DataTypes.STRING,
    attachments: DataTypes.STRING
  }, {});
  mail.associate = function(models) {
    // associations can be defined here
  };
  return mail;
};