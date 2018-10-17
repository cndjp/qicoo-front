import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Question } from '../dataelements/question';
import { addLike } from '../reducers/questions';

export class QuestionElement extends React.Component<Props> {
  public render() {
    const { q } = this.props;

    return (
      <div className="list-group-item flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{q.comment}</h5>

          <button
            type="button"
            className="btn base-color"
            onClick={this.addLike}
          >
            ★ {q.like}
          </button>
        </div>
        <footer className="blockquote-footer">
          {q.username} at {q.createdAt.toISOString()}
        </footer>
      </div>
    );
  }

  private addLike = () => {
    this.props.addLike(this.props.q);
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
  addLike: (q: Question) => dispatch(addLike(q)),
});

type Props = StateToProps & DispatchToProps;

export default connect<StateToProps, DispatchToProps, MyProps>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionElement);
