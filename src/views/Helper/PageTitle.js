import React, {Component} from 'react';



function PageTitle({title}) {
    return(
        <div class="pb-1" id="breadcrumbs-wrapper">
          <div class="container">
            <div class="row">
              <div class="col s12 m6 l6">
                <h5 class="breadcrumbs-title mt-0 mb-0">{title}</h5>
              </div>
            </div>
          </div>
        </div>
    )
}

export default PageTitle