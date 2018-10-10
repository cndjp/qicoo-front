import * as React from 'react';
import {Question} from '../dataelements/question'
import {QuestionList} from '../dataelements/questionList'
import QuestionElement from './QuestionElement'
import EmptyQuestion from './EmptyQuestion'
import { connect } from 'react-redux';

export class QuestionsList extends React.Component<Props> {

    public render (){
        const {questionList} = this.props;
        return (
            <main className="container-fluid">
            {questionList.isEmpty() ?
             <EmptyQuestion /> : 
             questionList.questions.map((q:Question) => 
            <QuestionElement
                key={q.id}
                q={q}
             />
            )}
            </main>
        );
    }
}

interface StateToProps {
    questionList: QuestionList
}

const mapStateToProps = (state: any) => ({
    questionList: state.questions
});

type Props = StateToProps

export default connect<StateToProps,void, void>(mapStateToProps)(QuestionsList);
