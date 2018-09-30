import * as React from 'react';
import {Question} from '../dataelements/question'
import QuestionElement from './QuestionElement'

const questions : Question[] = [
    new Question("3bf18dad-c1a4-4f4a-bfb0-227594de89d6", "user1", "質問1です", new Date(), new Date(), 1),
    new Question("80f842ef-b532-4171-95f4-414a4d438fe6", "user2", "質問2です", new Date(), new Date(), 20),
    new Question("bf0298be-707a-4deb-88d0-0d35479fb30e", "user3", "質問3です", new Date(), new Date(), 300),
];

const listItems = questions.map((q) =>
    <QuestionElement
        key={q.id}
        id={q.id}
        username={q.username}
        comment={q.comment}
        createdAt={q.createdAt}
        updatedAt={q.updatedAt}
        like={q.like}
     />
);

export default class QuestionsList extends React.Component {

    public render (){
        return (
            <div className="container-fluid ">
            {listItems}
            </div>
        );
    }
}