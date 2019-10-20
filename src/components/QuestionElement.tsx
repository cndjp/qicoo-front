import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Reply } from '../dataelements/reply';
import { Question } from '../dataelements/question';
import { putLike, postReply } from 'src/actions/questions';

import './QuestionElement.css';
import { NewReply } from 'src/dataelements/newReply';

const INTERVAL = 1 * 300;
const ATTENTION_THRESHOLD = 100;

export class QuestionElement extends React.Component<Props, State> {
  constructor(prop: Props, state: State) {
    super(prop, state);
    this.state = {
      sending: false,
      input: '',
    };
  }

  public render() {
    const { q } = this.props;

    return (
      <div className="accordion" id="accordions">
        <a
          aria-expanded="false"
          className={`list-group-item stretched-link card text-dark shadow-sm align-items-start ${this.addReplyBackGround(
            q.reply_total
          )}`}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{q.comment}</h5>

            <button
              type="button"
              onClick={this.addLike}
              disabled={this.state.sending}
              className={`btn base-color add-star-button ${this.state.sending &&
                'sending'}`}
            >
              <i className={`fas ${this.starIcon(q.like_count)}`} />
              &nbsp;{q.like_count}
            </button>
          </div>
          <footer className="card-subtitle small text-secondary">
            {q.display_name} @{'anonymous'}{' '}
            {q.created.toLocaleString('gregory', {
              timeZone: 'Asia/Tokyo',
              hour12: false,
            })}{' '}
            <a data-toggle="collapse" href={`#collapse_reply_${q.question_id}`}>
              {this.addReplyMark(q.reply_total)}
            </a>
          </footer>
        </a>
        <div
          id={`collapse_reply_${q.question_id}`}
          className="collapse list-group-item disabled"
        >
          {this.getReplyList(q.reply_list)}
          <form onSubmit={this.postNewReply} className="form-inline w-100 pt-2">
            <div className="mb-2 pr-md-0 col-md">
              <textarea
                value={this.state.input}
                onChange={this.handleReplyInput}
                className="form-control w-100"
                rows={2}
                placeholder="リプライしてみよう！"
              />
            </div>
            <div className="mb-2 col-md-auto">
              <button
                className="btn btn-info w-100"
                type="submit"
                disabled={!this.validInput()}
              >
                リプライ
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  private getReplyList = (replyList: Reply[]) => {
    return (
      <ul className="list-unstyled text-dark">
        {replyList.map(reply => (
          <li>
            <h5 className="card-body border-bottom">{reply.comment}</h5>
            <footer className="card-subtitle small text-secondary">
              {reply.created.toLocaleString('gregory', {
                timeZone: 'Asia/Tokyo',
                hour12: false,
              })}
            </footer>
          </li>
        ))}
      </ul>
    );
  };

  private handleReplyInput = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    this.setState({ input: e.currentTarget.value });
  };

  private validInput = (): boolean => {
    return this.state.input !== null && this.state.input.length > 0;
  };

  private addLike = () => {
    this.props.addLike(this.props.q);
    this.setState({ sending: true });
    setTimeout(() => {
      this.setState({ sending: false });
    }, INTERVAL);
  };

  private clearForm = () => {
    this.setState({ input: '' });
  };

  private postNewReply = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newReply = new NewReply(this.props.q.question_id, this.state.input);
    this.props.addReply(newReply);
    this.clearForm();
  };

  private addReplyBackGround = (reply_total: number): string => {
    if (reply_total === 0) {
      return 'bg-white';
    } else {
      return 'bg-white border-2';
    }
  };

  private addReplyMark = (reply_total: number): string => {
    if (reply_total === 0) {
      return '💭';
    } else {
      return '💭' + reply_total;
    }
  };

  private starIcon = (like: number): string => {
    if (like === 0) {
      return 'fa-star-half-alt';
    } else if (like < ATTENTION_THRESHOLD) {
      return 'fa-star';
    }
    return 'fa-sun';
  };
}

interface StateToProps {
  q: Question;
}
interface MyProps {
  q: Question;
}
const mapStateToProps = (reduxState: any, props: MyProps): StateToProps => ({
  q: props.q,
});

interface DispatchToProps {
  addLike: (q: Question) => void;
  addReply: (r: NewReply) => void;
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addLike: (q: Question) => {
    putLike(dispatch, q);
  },
  addReply: (r: NewReply) => {
    postReply(dispatch, r);
  },
});

type Props = StateToProps & DispatchToProps;

interface State {
  sending: boolean;
  input: string;
}

export default connect<StateToProps, DispatchToProps, MyProps>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionElement);
