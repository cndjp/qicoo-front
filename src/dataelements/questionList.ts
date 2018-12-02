import { Question } from './question';

export class QuestionList {
  constructor(
    readonly questions: Question[],
    readonly total: number) {}

  public isEmpty(): boolean {
    return this.questions.length === 0;
  }
}
