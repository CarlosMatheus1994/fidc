import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'connection',
  connector: 'mysql',
  url: '',
  host: 'DESKTOP-FETL00O',
  port: 3306,
  user: 'admin',
  password: 'fidc2022@',
  database: 'fidc-DB'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConnectionDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'connection';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.connection', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
