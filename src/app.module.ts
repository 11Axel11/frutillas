import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerduraModule } from './verdura/verdura.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Verdura } from './verdura/entities/verdura.entity';

@Module({
  imports: [VerduraModule,
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Adbf101123',
        database: 'frutas',
        entities: [Verdura],
        autoLoadEntities: true,
        synchronize: true,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}