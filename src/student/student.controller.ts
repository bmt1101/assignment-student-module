import { Controller, Post, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() data: Partial<Student>) {
    return this.studentService.createStudent(data);
  }
}
