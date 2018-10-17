import 'bootstrap';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Question } from '../dataelements/question';
import { postQuestion } from 'src/actions/questions';

interface Prop {
  addQuestion: (q: Question) => void;
}

interface State {
  input: string;
}

class QuestionForm extends React.Component<Prop, State> {
  constructor(props: any) {
    super(props);
    this.state = { input: '' };
    this.setState = this.setState.bind(this);
  }

  public render() {
    return (
      <nav className="navbar navbar-dark fixed-bottom pt-2 px-2 pb-0">
        <form onSubmit={this.postNewQuestion} className="form-inline w-100">
          <div className="mb-2 pr-md-0 col-md">
            <textarea
              value={this.state.input}
              onChange={this.handleQuestionInput}
              className="form-control w-100"
              rows={2}
              placeholder="聞いてみよう：生命、宇宙、そして万物についての究極の疑問の答えは何？"
            />
          </div>
          <div className="mb-2 col-md-auto">
            <button className="btn btn-outline-light w-100" type="submit">
              聞いてみる
            </button>
          </div>
        </form>
      </nav>
    );
  }

  private postNewQuestion = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newQuestion = new Question(this.state.input);
    this.props.addQuestion(newQuestion);
    this.clearForm();
  };

  private handleQuestionInput = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    this.setState({ input: e.currentTarget.value });
  };

  private clearForm = () => {
    this.setState({ input: '' });
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addQuestion: (q: Question) => {
    postQuestion(dispatch, q);
  },
});

export default connect(
  null,
  mapDispatchToProps
)(QuestionForm);
