import * as React from 'react';

import logo from '../logo.png';

export default class QuestionsList extends React.Component {
  public render() {
    return (
      <div className="jumbotron text-center">
        <p><img src={logo} alt="Qicoo logo" className="rounded-circle" /></p>
        {/* <h1>質問受付中！</h1> */}
        <p>JapanContainerDays v18.12のコミュニティセッション「MeetUpを活性化せよ！最強のリアルタイムQA投稿アプリをCloud_Nativeにつくってみた」の発表資料は<a href="https://speakerdeck.com/cndjp/jkd-v18-dot-12-2w3">Speaker Deckにて公開</a>しています。</p>
      </div>
    );
  }
}
