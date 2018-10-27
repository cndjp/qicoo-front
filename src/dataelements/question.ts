import { v4 } from 'uuid';

export class Question {
  constructor(
    readonly comment: string,
    readonly id: string = v4(),
    readonly username: string = '',
    readonly created_at: Date = new Date(),
    readonly updated_at: Date = new Date(),
    readonly like: number = 0
  ) {}
}
