import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';

import HeaderNav from './HeaderNav';
import QuestionForm from './QuestionForm';
import QuestionsList from './QuestionsList';

export default class App extends React.Component {
  public ADD_QUESTION = 'ADD_QUESTION';

  constructor(props: any){
    super(props);
  }

  public render() {

    const parsedUrl = new URL(window.location.href);
    const page = parseInt(parsedUrl.searchParams.get("p") || "1", 10);
    const sort = parsedUrl.searchParams.get("sort") || "created_at";

    return (
      <div>
        <HeaderNav page={page} sort={sort} />
        <QuestionsList page={page} sort={sort} />
        <QuestionForm />
      </div>
    );
  }
}
