import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import HeaderNav from './HeaderNav';
import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';

export default class App extends React.Component {
  public ADD_QUESTION = 'ADD_QUESTION';

  public render() {
    return (
      <div>
        <HeaderNav />
        <QuestionsList />
        <QuestionForm />
      </div>
    );
  }
}
