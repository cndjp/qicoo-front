import * as React from 'react';
import { Question } from '../dataelements/question';
import { QuestionList } from '../dataelements/questionList';
import QuestionElement from './QuestionElement';
import EmptyQuestion from './EmptyQuestion';
import { connect } from 'react-redux';
import { getQuestionList } from 'src/actions/questions';
import { Dispatch } from 'redux';

export class QuestionsList extends React.Component<Props> {
  public render() {
    const { questionList } = this.props;
    return (
      <main className="container-fluid">
        {questionList.isEmpty() ? (
          <EmptyQuestion />
        ) : (
          questionList.questions.map((q: Question) => (
            <QuestionElement key={q.id} q={q} />
          ))
        )}
      </main>
    );
  }

  public componentDidMount = () => {
    this.props.loadQuestion();
  };
}

interface StateToProps {
  questionList: QuestionList;
}

const mapStateToProps = (state: any) => ({
  questionList: state.questions,
});

interface DispatchToProps {
  loadQuestion: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadQuestion: (): void => {
    getQuestionList(dispatch);
  },
});

type Props = StateToProps & DispatchToProps;

export default connect<StateToProps, DispatchToProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);
