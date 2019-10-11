export class Question {
  constructor(
    readonly comment: string,
    readonly id: number = 0,
    readonly program_name: string,
    readonly event_name: string,
    readonly done_flg: boolean,
    readonly display_name: string = '',
    readonly like_count: number = 0,
    readonly created: Date = new Date(),
    readonly updated: Date = new Date()
  ) {}
}
