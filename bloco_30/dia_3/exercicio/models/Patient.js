module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    patient_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    fullname: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'Patients',
      underscored: true,
    });

  Patient.associate = (models) => {
    Patient.hasOne(models.Plan, {
      as: 'plans', foreignKey: 'patientId'
    });
  };

  return Patient;
}
