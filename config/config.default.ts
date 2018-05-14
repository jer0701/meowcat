import { EggAppConfig, PowerPartial } from 'egg';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
  sourceUrl: string;
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig;

  // app special config
  config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1525705463327_5630';

  // add your config here
  config.middleware = [];

  // wechat
  config.wechat = {
    appid: 'wxc9eb63fab2ca233e',
    secret: 'ed190060be4cedf4970fea93a995f747'
  }

  // secret
  config.secret = 'ed190060be4cedf4970fea93a995f747'

  // localhost csrf
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['http://localhost:7001']
  }

  return config;
};
