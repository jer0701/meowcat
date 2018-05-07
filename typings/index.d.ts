import { Sequelize } from 'sequelize';

declare module 'egg' {
    interface Application {
        Sequelize: SequelizeStatic; // 这里必须是这个，不然会报 STRING 找不到
        model: Sequelize;
    }
}