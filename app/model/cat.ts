import { Application } from 'egg'

module.exports = (app: Application) => {
    const Sequelize = app.Sequelize;

    const { STRING, TEXT, INTEGER } = Sequelize;
    const Cat = app.model.define('cat', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: TEXT,
        gender: INTEGER,
        avatarUrl: TEXT,
        type: STRING(128),
        feature: TEXT,
        user_id: INTEGER
    });

    Cat.associate = function() {
        app.model.Cat.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
    };

    return Cat;
}