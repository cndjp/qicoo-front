import 'bootstrap';
import * as React from 'react';
import SortButtons from './SortButtons';

import './BaseColors.css';

interface Props {
  page: number;
  sort: string
}

interface State {
  menuExpanded: boolean;
}

export default class HeaderNav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { menuExpanded: false };
  }

  public render() {
    const { menuExpanded } = this.state;
    const menuClass =
      'collapse navbar-collapse' + (menuExpanded ? ' show' : '');

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top fixed-position">
        <a className="navbar-brand" href="#">
          Qicoo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarCollapse"
          aria-expanded={menuExpanded}
          aria-label="Toggle navigation"
          onClick={this.toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={menuClass} id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                <i className="fas fa-chalkboard-teacher" />&nbsp;
                Cloud Native Developers JP 9th
                <span className="sr-only">(現在のページ)</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                使い方
              </a>
            </li> */}
          </ul>

          <SortButtons page={this.props.page} sort={this.props.sort} />
        </div>
      </nav>
    );
  }

  private toggleMenu = (): void => {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  };
}
