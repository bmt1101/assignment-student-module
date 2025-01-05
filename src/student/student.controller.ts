import { Controller, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { StudentService } from '../services/student.service';
import { UpdateStudentDto } from '../dto/update-student.dto';
import { Student } from '../entities/student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Patch(':id')
  async updateStudent(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentService.updateStudent(id, updateStudentDto);
  }
}