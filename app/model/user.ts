import { Application } from 'egg';

module.exports = (app: Application) => {
    const Sequelize = app.Sequelize;

    const { STRING } = Sequelize;
    const User = app.model.define('user', {
        username: STRING(32),
        password: STRING(32)
    });

    return User;
}