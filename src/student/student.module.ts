// student.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from 'src/entities/student.entity';  // Or relative path if needed
import { StudentService } from './student.service';  // Ensure correct path for your service
import { StudentController } from './student.controller';  // If you have a controller

@Module({
  imports: [TypeOrmModule.forFeature([Student])],  // Register the entity
  providers: [StudentService],
  controllers: [StudentController],  // Optional if you have a controller
})
export class StudentModule {}
