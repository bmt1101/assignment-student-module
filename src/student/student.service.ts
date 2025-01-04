async findAll(): Promise<Student[]> {
  return await this.studentRepository.find();
}
