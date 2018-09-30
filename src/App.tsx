import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import './App.css';
import HeaderNav from './components/HeaderNav';
import QuestionForm from './components/QuestionForm';
import QuestionsList from './components/QuestionsList';

class App extends React.Component {

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

export default App;
