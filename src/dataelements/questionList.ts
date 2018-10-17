import {Question} from './question';

export class QuestionList {
    constructor(
        readonly questions: Question[]
    ) {
    }

    public isEmpty(): boolean {
        return this.questions.length === 0;
    }
}
