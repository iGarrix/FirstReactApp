import React, { Fragment } from "react";
import { Link }from "react-router-dom"
const NotFound = () => {
    return(
        <Fragment>
            <div className="d-flex justify-content-center w-100 h-100 align-items-center">
                <h2>404 oops!</h2>
                <Link to="/">Go to main</Link>
            </div>
        </Fragment>
    )
}

export default NotFound;