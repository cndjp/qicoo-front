import { Reply } from './reply';

export class Question {
  constructor(
    readonly comment: string,
    readonly question_id: number,
    readonly program_name: string,
    readonly event_name: string,
    readonly done_flg: boolean,
    readonly display_name: string = '',
    readonly like_count: number = 0,
    readonly created: Date = new Date(),
    readonly updated: Date = new Date(),
    readonly reply_list: Reply[],
    readonly reply_total: number = 0
  ) {}
}
