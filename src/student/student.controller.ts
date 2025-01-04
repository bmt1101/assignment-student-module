import { Delete, Param } from '@nestjs/common';

@Delete(':id')
remove(@Param('id') id: number) {
  return this.studentService.deleteStudent(id);
}
