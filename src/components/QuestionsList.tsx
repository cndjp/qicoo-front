import * as React from 'react';
import { Question } from '../dataelements/question';
import { QuestionList } from '../dataelements/questionList';
import PageNav from './PageNav';
import QuestionElement from './QuestionElement';
import EmptyQuestion from './EmptyQuestion';
import { connect } from 'react-redux';
import { getQuestionList } from 'src/actions/questions';
import { Dispatch } from 'redux';

// const RELOAD_INTERVAL = 25;
// const RELOAD_VARIANCE = 10;
const QUESTIONS_PER_PAGE = 20;

export class QuestionsList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = {
    //   interval: setInterval(
    //     () => this.props.loadQuestion(props.page, props.sort),
    //     (RELOAD_INTERVAL + Math.random() * RELOAD_VARIANCE) * 1000
    //   ),
    // };
  }

  public render() {
    const { questionList, page, sort } = this.props;
    return (
      <main className="container-fluid">
        {questionList.isEmpty() ? (
          <EmptyQuestion />
        ) : (
          this.renderLists(questionList, page, sort)
        )}
      </main>
    );
  }

  // public componentDidMount = () => {
  //   const { page, sort } = this.props;
  //   this.props.loadQuestion(page, sort);
  // };

  // public componentWillUnmount = () => {
  //   clearInterval(this.state.interval);
  // };

  private renderLists = (
    ql: QuestionList,
    page: number,
    sort: string
  ): JSX.Element[] => {
    const items = ql.questions.map((q: Question) => (
      <QuestionElement key={q.id} q={q} />
    ));

    items.push(
      <PageNav
        activePage={page}
        questionsPerPage={QUESTIONS_PER_PAGE}
        total={ql.total}
        sort={sort}
        key="pagenav"
      />
    );

    return items;
  };
}

interface StateToProps {
  questionList: QuestionList;
}

const mapStateToProps = (state: any) => ({
  questionList: state.questions,
});

interface DispatchToProps {
  loadQuestion: (page: number, sort: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadQuestion: (page: number, sort: string): void => {
    getQuestionList(
      (page - 1) * QUESTIONS_PER_PAGE + 1,
      page * QUESTIONS_PER_PAGE,
      sort,
      dispatch
    );
  },
});

interface ReactProps {
  page: number;
  sort: string;
}
type Props = StateToProps & DispatchToProps & ReactProps;

interface State {
  interval: NodeJS.Timer;
}

export default connect<StateToProps, DispatchToProps, void>(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsList);
