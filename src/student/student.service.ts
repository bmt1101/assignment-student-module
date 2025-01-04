async updateStudent(id: number, data: Partial<Student>): Promise<Student> {
  await this.studentRepository.update(id, data);
  return await this.studentRepository.findOneBy({ id });
}
