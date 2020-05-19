import React, {Component} from 'react';
const img = require('../../assets/images/gallery/error-2.png')

class PageNotFound extends Component {
    render(){
        return(
            <div className="section section-404 p-0 m-0 height-100vh">
                <div className="row">
                    <div className="col s12 center-align white">
                        <img src={img} className="bg-image-404" alt=""/>
                            <h1 className="error-code m-0">404</h1>
                            <h6 className="mb-2">BAD REQUEST</h6>
                            <a className="btn waves-effect waves-light gradient-45deg-deep-purple-blue gradient-shadow mb-4" href="/">Back
                                TO Home</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageNotFound