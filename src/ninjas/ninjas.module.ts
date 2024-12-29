import { Module } from '@nestjs/common';
import { NinjasService } from './ninjas.service';
import { NinjasController } from './ninjas.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [NinjasService, PrismaService],
  controllers: [NinjasController],
})
export class NinjasModule {}
