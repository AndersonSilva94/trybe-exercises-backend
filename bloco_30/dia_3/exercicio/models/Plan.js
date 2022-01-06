module.exports = (sequelize, DataTypes) => {
  const Plan = sequelize.define('Plan', {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  },
    {
      timestamps: false,
      tableName: 'Plans',
      underscored: true,
    });

  Plan.associate = (models) => {
    Plan.belongsToMany(models.Patient, { as: 'patient', foreignKey: 'patientId' })
  }

  return Plan;
}