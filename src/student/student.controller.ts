import { Get } from '@nestjs/common';

@Get()
findAll() {
  return this.studentService.findAll();
}
