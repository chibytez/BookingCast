export default (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      email: {
        type: DataTypes.STRING,
        required: true
      },
      password: {
        type: DataTypes.STRING,
        required: false
      },
    },
    {}
  );
  Users.associate = (models) => {
    Users.hasMany(models.Requests,
      {
        foreignKey: 'userId', onUpdate: 'CASCADE', onDelete: 'SET NULL'
      });
    Users.hasMany(models.Notifications, {
      foreignKey: 'userId', onUpdate: 'CASCADE', onDelete: 'SET NULL'
    });
  };

  return Users;
};
