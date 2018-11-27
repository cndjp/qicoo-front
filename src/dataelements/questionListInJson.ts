import { Question } from './question';

export default class QuestionListInJson {
  constructor(
    readonly object: string,
    readonly type: string,
    readonly data: Question[]
  ) {}
}
