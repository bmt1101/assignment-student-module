import { Controller, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { StudentService } from '../students/student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Delete(':id')
  async deleteStudent(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    await this.studentService.deleteStudent(id);
    return { message: `Student with ID ${id} has been deleted` };
  }
}