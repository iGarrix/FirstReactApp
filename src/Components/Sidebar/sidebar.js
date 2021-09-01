import React from "react";
import ReactDOM from "react-dom";

const SideBar = () => {

    return(
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="contacts-labels">
            <div class="title">All contacts<span>76</span></div>
            <div class="list">
              <div class="input-group">
                <input type="text" class="contacts-search" placeholder="Search" />
              </div>
              <div class="head">Labels</div>
              <div class="unit">
                <div class="lab lab-success">Work</div><span>7</span>
              </div>
              <div class="unit">
                <div class="lab lab-primary">Family</div><span>8</span>
              </div>
              <div class="unit">
                <div class="lab lab-danger">Private</div><span>13</span>
              </div>
              <div class="unit">
                <div class="lab lab-warning">Friends</div><span>47</span>
              </div>
              <button type="button" class="btn btn-primary font-weight-700">Add new label</button>
            </div>
          </div>
        </div>
    )
}

export default SideBar;