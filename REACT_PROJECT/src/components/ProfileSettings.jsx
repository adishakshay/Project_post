import React, { useEffect } from "react";
import '../asserts/ProfileSettings.css';
import userImage from '../asserts/user.png';

const ProfileSettings = () => {

    useEffect(() => {

        if (window.$) {
            window.$('.menu').on('click', function () {
              window.$('.bar').toggleClass('animate');
              window.$('.expand-menu').toggleClass('animate');
              window.$('.expand-menu .nav-link').toggleClass('animate');
              setTimeout(function () {
                window.$('.expand-menu .nav-link').toggleClass('animate-show');
              }, 500);
        });

        return () => {
           window.$('.menu').off('click');
        };
      }
    }, []);


  return (
        <div className="col-md-9">
          <div className="container content clear-fix">
            <h1 className="prof">Profile Settings</h1>
            <div className="row" style={{ height: "100%" }}>
              <div className="col-md-3">
                <div className="d-inline">
                  <img
                    src={userImage}
                    width="90px"
                    style={{ margin: 0 }}
                    alt="Profile"
                  />
                  <br />
                  <p className="pl-2 mt-2">
                    <a href="#" className="btn" style={{ color: "#8f9096", fontWeight: 600 }}>
                      Edit Picture
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="container">
                  <form className="forps">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" className="form-control" id="fullName" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pass">Password</label>
                      <input type="password" className="form-control" id="pass" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="birthday">Birthday</label>
                      <input type="date" className="form-control" id="birthday" />
                    </div>
                    <div className="row mt-5">
                      <div className="col">
                        <button type="button" className="btn btn-primary btn-block">
                          Save Changes
                        </button>
                      </div>
                      <div className="col">
                        <button type="button" className="btn btn-default btn-block">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProfileSettings;
