import React from "react";
import ReactDOM from "react-dom";

const Main = () => {
    return(
        <div class="col-lg-9 col-md-8 col-sm-12">
        <div class="contacts-list">
          <h5 class="title">Contact List</h5>
  
          <form class="ac-custom ac-checkbox ac-checkmark" autocomplete="off">
            <div class="input-group">
              <input type="text" class="contacts-list-search" placeholder="Search" />
            </div>
            <div class="unit head">
              <div class="field name">
                <div class="check">
                  <input id="cb1" name="cb1" type="checkbox" />
                  <label for="cb1"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                Name
              </div>
              <div class="field phone">
                Phone
              </div>
              <div class="field email icons">
                Email
                <div class="btn-group pull-right" role="group">
                  <button type="button" class="btn btn-default"><span class="icon icon-folder"></span></button>
  
                  <div class="btn-group" role="group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="icon icon-label"></span></button>
  
                    <ul class="dropdown-menu pull-right">
                      <li><a href="#"><span class="label label-success text-dark">New</span></a></li>
                      <li><a href="#"><span class="label label-primary text-dark">Social</span></a></li>
                      <li><a href="#"><span class="label label-warning text-dark">Spam</span></a></li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-default"><span class="icon icon-trash"></span></button>
                </div>
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb2" name="cb1" type="checkbox" />
                  <label for="cb2"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>
                    
                </div>
                <div>
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="image" class="avatar" /> Alexander Verdnam
                </div>
                <div class="lab lab-warning">Friends</div>
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb8" name="cb1" type="checkbox" />
                  <label for="cb8"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                <div>
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="image" class="avatar" /> Gerard Butler
                </div>
                <div class="lab lab-success">Work</div>
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb3" name="cb1" type="checkbox" />
                  <label for="cb3"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                <div>
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="image" class="avatar" /> Anna Lee
                </div>
                <div class="lab lab-danger">Private</div>
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb4" name="cb1" type="checkbox" />
                  <label for="cb4"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="image" class="avatar" /> Alexandera Verdnam
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb5" name="cb1" type="checkbox" />
                  <label for="cb5"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                <div>
                  <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="image" class="avatar" /> Olga Verdnam
                </div>
                <div class="lab lab-primary">Family</div>
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
            <div class="unit">
              <div class="field name">
                <div class="check">
                  <input id="cb6" name="cb1" type="checkbox" />
                  <label for="cb6"></label>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="image" class="avatar" /> John Verdnam
              </div>
              <div class="field phone">
                +1-800-600-9898
              </div>
              <div class="field email">
                example@gmail.com
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Main;