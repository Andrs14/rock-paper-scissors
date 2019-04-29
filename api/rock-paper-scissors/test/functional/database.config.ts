import { ConnectionOptions } from 'typeorm';

const databaseConfig: Partial<ConnectionOptions> = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'rpstest',
};

export default databaseConfig;
