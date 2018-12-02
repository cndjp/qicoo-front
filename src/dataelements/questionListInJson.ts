import { Question } from './question';

export default class QuestionListInJson {
  constructor(
    readonly object: string,
    readonly type: string,
    readonly total: number,
    readonly data: Question[]
  ) {}
}
