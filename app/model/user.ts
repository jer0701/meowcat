import { Application } from 'egg'

module.exports = (app: Application) => {
    const Sequelize = app.Sequelize;

    const { STRING, TEXT, INTEGER, BIGINT } = Sequelize;
    const User = app.model.define('user', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        openid: {
            type: STRING(128),
            unique: true,
            allowNull: false
        },
        token: STRING(128),
        nickName: TEXT,
        gender: INTEGER,
        city: STRING(16),
        avatarUrl: TEXT,
        birthdate: BIGINT
    });

    User.associate = function() {
        app.model.User.hasMany(app.model.Cat, { as: 'cats', foreignKey: 'user_id' });
        app.model.User.hasMany(app.model.Post, { as: 'posts', foreignKey: 'user_id' });
    };

    return User;
}