import { Put, Param } from '@nestjs/common';

@Put(':id')
update(@Param('id') id: number, @Body() data: Partial<Student>) {
  return this.studentService.updateStudent(id, data);
}
