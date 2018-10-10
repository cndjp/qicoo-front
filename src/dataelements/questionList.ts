import {Question} from './question';

export class QuestionList {
    constructor(
        private _questions: Question[]
    ) {
    }

    get questions(): Question[] {
        return this._questions;
    }

    public isEmpty(): boolean {
        return this._questions.length === 0;
    }
}
