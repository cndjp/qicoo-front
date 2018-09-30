import 'bootstrap';
import * as React from 'react';

import './HeaderNav.css';

import logo from '../logo.png';

export default function HeaderNav() {

  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top">
      <a className="navbar-brand" href="#">
      <img src={logo} width="32px" height="32px" />
      Qicoo</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
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
