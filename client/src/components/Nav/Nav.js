import React from "react";
import "./Nav.css";

const Nav = () => (
    <div className="jumbotron">
        <div className="row">
            <a href="/" className="col-md-5"><h4>Brendan's Books</h4></a>
            <div className="col-md-4"></div>
            <div className="col-md-3">
            <a href="/search" className="float-left"><h4>Search</h4></a>
            <a href="/saved" className="float-right"><h4>Saved</h4></a>
            </div>
            <hr />

        </div>

        <h1 className="display-4">(React) Brendan's Books Search</h1>


    </div>

)

export default Nav;