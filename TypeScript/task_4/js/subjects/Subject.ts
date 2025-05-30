import { Teacher } from './Teacher';

export class Subject {
  protected teacher: Teacher | undefined;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }
}