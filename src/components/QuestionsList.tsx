import * as React from 'react';
import { Question } from '../dataelements/question';
import { QuestionList } from '../dataelements/questionList';
import QuestionElement from './QuestionElement';
import EmptyQuestion from './EmptyQuestion';
import { connect } from 'react-redux';
import { getQuestionList } from 'src/actions/questions';
import { Dispatch } from 'redux';

const RELOAD_INTERVAL = 30;

export class QuestionsList extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      interval: setInterval(() => this.props.loadQuestion(0), RELOAD_INTERVAL * 1000)
    }
  }

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
    this.props.loadQuestion(0);
  };

  public componentWillUnmount = () => {
    clearInterval(this.state.interval);
  }
}

interface StateToProps {
  questionList: QuestionList;
}

const mapStateToProps = (state: any) => ({
  questionList: state.questions,
});

interface DispatchToProps {
  loadQuestion: (loadedCount: number) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadQuestion: (loadedCount: number): void => {
    getQuestionList(loadedCount, dispatch);
  },
});

type Props = StateToProps & DispatchToProps;
interface State {
  interval: NodeJS.Timer
};


export default connect<StateToProps, DispatchToProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);
