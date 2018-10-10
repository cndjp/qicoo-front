import {v4} from 'uuid';

export class Question {
    constructor(
        private _comment: string,
        private _id: string = v4(),
        private _username: string = '',
        private _createdAt: Date = new Date(),
        private _updatedAt: Date = new Date(),
        private _like: number = 0
    ) {
    }

    get id(): string {
        return this._id;
    }
    get username(): string {
        return this._username;
    }
    get comment(): string {
        return this._comment;
    }
    get createdAt(): Date {
        return this._createdAt;
    }
    get updatedAt(): Date {
        return this._updatedAt;
    }
    get like(): number {
        return this._like;
    }
}
