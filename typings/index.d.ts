import { Sequelize, SequelizeStatic } from 'sequelize'

declare module 'egg' {
    // 扩展 app
    interface Application {
        Sequelize: SequelizeStatic;
        //model: Sequelize;
    }
}