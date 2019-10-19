import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Question } from '../dataelements/question';
import { putLike } from 'src/actions/questions';

import './QuestionElement.css';

const INTERVAL = 1 * 300;
const ATTENTION_THRESHOLD = 100;

export class QuestionElement extends React.Component<Props, State> {
  constructor(prop: Props, state: State) {
    super(prop, state);
    this.state = {
      sending: false,
    };
  }

  public render() {
    const { q } = this.props;

    return (
      <div className="accordion" id="accordions">
        <a
          data-toggle="collapse"
          aria-expanded="false"
          href={`#collapse_reply_${q.question_id}`}
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
          <footer className="blockquote-footer">
            {q.display_name} @{'anonymous'}{' '}
            {q.created.toLocaleString('gregory', {
              timeZone: 'Asia/Tokyo',
              hour12: false,
            })}{' '}
            {this.addReplyMark(q.reply_total)}
          </footer>
        </a>
        <div
          id={`collapse_reply_${q.question_id}`}
          className="collapse list-group-item"
        >
          <div className="card-body">"リプライだよ"</div>
          <footer className="blockquote-footer">
            {q.created.toLocaleString('gregory', {
              timeZone: 'Asia/Tokyo',
              hour12: false,
            })}
          </footer>
          <div className="card-body">"リプライだよ"</div>
          <footer className="blockquote-footer">
            {q.created.toLocaleString('gregory', {
              timeZone: 'Asia/Tokyo',
              hour12: false,
            })}
          </footer>
        </div>
      </div>
    );
  }

  private addLike = () => {
    this.props.addLike(this.props.q);
    this.setState({ sending: true });
    setTimeout(() => {
      this.setState({ sending: false });
    }, INTERVAL);
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
      return '';
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
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addLike: (q: Question) => {
    putLike(dispatch, q);
  },
});

type Props = StateToProps & DispatchToProps;

interface State {
  sending: boolean;
}

export default connect<StateToProps, DispatchToProps, MyProps>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionElement);
