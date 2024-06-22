import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentModule } from './department/department.module';





@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground:true,
      
    }),
    ConfigModule.forRoot({  isGlobal: true}),
    UserModule,
    AuthModule,
    DepartmentModule,
  ],
  controllers: [AppController],
  providers: [AppService,PrismaService],
  exports:[PrismaService]
})
export class AppModule {}
