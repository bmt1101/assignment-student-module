async deleteStudent(id: number): Promise<void> {
  await this.studentRepository.delete(id);
}
