import * as React from "react";

import './BaseColors.css';

interface Props {
  activePage: number;
  questionsPerPage: number;
  total: number;
  sort: string;
}

export default class PageNav extends React.Component<Props> {

  public render() {
    const p: Props = this.props;

    return (
      <nav aria-label="page navigation" className="mt-2">
        <ul className="pagination justify-content-center">
          {this.pageLinks(p)}
          <li className="page-item disabled" key="total">
            <span className="page-link"><i className="fas fa-comment-alt fa-flip-horizontal" /> {this.props.total} questions</span>
          </li>
        </ul>
      </nav>
    );
  }

  private pageLinks = (p: Props): JSX.Element[] => {
    const items: JSX.Element[] = [];
    const pageCount = Math.ceil(p.total/p.questionsPerPage);

    for (let i: number = 1; i <= pageCount; i++){
      items.push(
        <li className="page-item" key={i}>
          <a className={`page-link ${(i === p.activePage ? "base-color" : "base-color-text")}`} href={`?p=${i}&sort=${p.sort}`}>
            {i}
            {(i === p.activePage && <span className='sr-only'>（現在のページ）</span>)}
          </a>
        </li>
      )
    }
    return items;
  }
}
