import 'bootstrap';
import * as React from 'react';
import {connect} from 'react-redux'
import { Dispatch } from 'redux';
import {Question} from '../dataelements/question'
import {addQuestion} from '../reducers/questions'

interface Prop {
    addQuestion: (q:Question)=> void
}

interface State {
    input: string
}

class QuestionForm extends React.Component<Prop, State> {

    constructor(props: any) {
        super(props);
        this.state = {input: ""};
        this.setState = this.setState.bind(this);
    }

    public render() {
        return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-bottom">
            <form onSubmit={this.postNewQuestion}
                className="form-inline mt-2 mt-md-0 w-100">

                <div className="flex-grow-1 w-75 mr-2">
                    <input value={this.state.input}
                    onChange={this.handleQuestionInput}
                    className="form-control w-100" type="text" placeholder="聞いてみよう：生命、宇宙、そして万物についての究極の疑問の答えは何？" />
                </div>
                <div className="flex-grow-0">
                
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">聞いてみる</button>
                </div>
            </form>
        </nav>
        )
    }

    private postNewQuestion = (e:React.FormEvent<HTMLFormElement>) : void => {
        e.preventDefault();
        const newQuestion = new Question(this.state.input);
        this.props.addQuestion(newQuestion);
        this.clearForm();
    }

    private handleQuestionInput = (e: React.FormEvent<HTMLInputElement>) : void => {
        this.setState(
            {input: e.currentTarget.value}
        );
    }

    private clearForm = () => {
        this.setState(
            {input: ''}
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addQuestion: (q:Question) => dispatch(addQuestion(q))
})

export default connect(
    null,
    mapDispatchToProps
)(QuestionForm);
