import { Question } from './question';

export default class QuestionListInJson {
  constructor(readonly total: number, readonly value: Question[]) {}
}
