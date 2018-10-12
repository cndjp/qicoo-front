import 'bootstrap';
import * as React from 'react';

import './HeaderNav.css';

import logo from '../logo.png';

interface State {
  menuExpanded: boolean
}

export default class HeaderNav extends React.Component<any, State> {

  constructor(props: any) {
    super(props);
    this.state = {menuExpanded: false};
  }

  public render() {

    const {menuExpanded} = this.state;
    const menuClass = "collapse navbar-collapse" + (menuExpanded ? " show" : "");

    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <a className="navbar-brand" href="#">
          <img src={logo} width="32px" height="32px" />
          Qicoo</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarCollapse" aria-expanded={menuExpanded} aria-label="Toggle navigation" onClick={this.toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={menuClass} id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">最新の質問<span className="sr-only">(現在のページ)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">過去の質問</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">使い方</a>
            </li>
          </ul>

          <form className="form-inline mt-2 mt-md-0">
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Twitter でログイン</button>
          </form>
        </div>
      </nav>
    );
  }

  private toggleMenu = (): void => {
    this.setState({menuExpanded: !this.state.menuExpanded});
  }
}
