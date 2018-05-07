import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};
  config.sequelize = {
    dialect: 'mysql',
    database: 'meowcat-prod',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'wang1234'
  }

  return config;
};
