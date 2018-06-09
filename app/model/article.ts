import { Application } from "egg";

module.exports = (app: Application) => {
    const Sequelize = app.Sequelize;
    const { STRING, INTEGER } = Sequelize;
    const Article = app.model.define(
        "article",
        {
            id: {
                type: INTEGER,
                primaryKey: true,
                autoIncrement: true,
                unique: true
            },
            title: STRING(128),
            content: STRING,
        }
    );

    Article.associate = function () {
        Article.belongsTo(app.model.User);
    }

    return Article;
};
