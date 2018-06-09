import { Application } from 'egg'

module.exports = (app: Application) => {
    const Sequelize = app.Sequelize;

    const { STRING, INTEGER } = Sequelize;
    const Post = app.model.define('post', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        cat_id: INTEGER,
        user_id: INTEGER,
        time: STRING(32),
        date: STRING(16)
    });

    Post.associate = function() {
        app.model.Post.belongsTo(app.model.User, { as: 'user', foreignKey: 'user_id' });
    };

    return Post;
}