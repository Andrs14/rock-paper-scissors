import { ConnectionOptions } from 'typeorm';
import configJson from '../../ormconfigtest.json';
const databaseConfig: Partial<ConnectionOptions> = configJson as Partial<ConnectionOptions>;

export default databaseConfig;
