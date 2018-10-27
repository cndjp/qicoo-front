import * as React from 'react';

import logo from '../logo.png';

export default class QuestionsList extends React.Component {
  public render() {
    return (
      <div className="jumbotron text-center">
        <p><img src={logo} alt="Qicoo logo" /></p>
        <h1>質問受付中！</h1>
        <p>質問が投稿されると、ここに表示されます。</p>
      </div>
    );
  }
}
