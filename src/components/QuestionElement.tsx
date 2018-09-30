import * as React from 'react';
import {Question} from '../dataelements/question'

export default class QuestionElement extends React.Component<Question> {

    public render(){
        return (

        <div className="list-group-item flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{this.props.comment}</h5>

                <button type="button" className="btn base-color">
                    {this.props.like} ★
                </button>
            </div>
            <footer className="blockquote-footer">{this.props.username} at {this.props.createdAt.toISOString()}</footer>
        </div>
        );
    }
}
