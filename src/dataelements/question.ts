export class Question {
    constructor(
        private _id: string,
        private _username: string,
        private _comment: string,
        private _createdAt: Date,
        private _updatedAt: Date,
        private _like: number
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
