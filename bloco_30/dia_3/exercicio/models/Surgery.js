module.exports = (sequelize, DataTypes) => {
  const Surgery = sequelize.define('Surgery', {
    /* surgery_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }, */
    speciality: DataTypes.STRING,
    doctor: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Surgeries',
    underscored: true,
  });

  return Surgery;
};