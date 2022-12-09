import { DataSource } from 'typeorm';
import { Photo } from '../photo/entities/photo.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'appuser',
        password: 'alka1978',
        database: 'claimsdb',
        entities: [Photo],
        synchronize: true,
      });
      console.log('Connecting to database');
      return dataSource.initialize();
    },
  },
];
