import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from '../home/index';
import User from '../user/index';
import UserDetail from "../user/UserDetail";
export default ()=>{
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/user'>User</Link>

                    </li>
                </ul>
                <hr/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/user" component={User}/>
                <Route exact path="/user/detail" component={UserDetail}/>
            </div>
        </Router>
    );
}
