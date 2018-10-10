export class User {
    constructor(
        private _id: string,
        private _username: string,
        private _createdAt: Date,
        private _updatedAt: Date,
    ) {
    }

    get id(): string {
        return this._id;
    }
    get username(): string {
        return this._username;
    }
    get createdAt(): Date {
        return this._createdAt;
    }
    get updatedAt(): Date {
        return this._updatedAt;
    }
}
