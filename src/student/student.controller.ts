import { Controller, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { StudentService } from '../students/student.service';
import { UpdateStudentDto } from '../entities/update-student.dto';
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
