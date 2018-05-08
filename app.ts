import { Application } from 'egg'

module.exports = (app: Application) => {
    if (app.config.env === 'local') {
      app.beforeStart(function* () {
        yield app.model.sync({force: true});
      });
    }
};