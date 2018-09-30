import 'bootstrap';
import * as React from 'react';

export default class QustionForm extends React.Component {

    public render() {
        return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-bottom">
            <form className="form-inline mt-2 mt-md-0 w-100">

                <div className="flex-grow-1 w-75 mr-2">
                    <input className="form-control w-100" type="text" placeholder="聞いてみよう：生命、宇宙、そして万物についての究極の疑問の答えは何？" />
                </div>
                <div className="flex-grow-0">
                
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit" onClick={this.answer}>聞いてみる</button>
                </div>
            </form>
        </nav>
        )
    }

    private answer() {
        alert('42');
    }
}
