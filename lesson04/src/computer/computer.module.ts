import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuModule } from 'src/cpu/cpu.module';
import { DiskModule } from 'src/disk/disk.module';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports:[CpuModule,DiskModule,PowerModule],
  controllers: [ComputerController]
})
export class ComputerModule {}
