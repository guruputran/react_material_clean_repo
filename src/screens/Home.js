/** @format */

import React from "react";

const Home = () => {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group input-group-outline my-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group input-group-outline is-valid my-3">
              <label className="form-label">Success</label>
              <input type="email" className="form-control" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group input-group-outline is-invalid my-3">
              <label className="form-label">Error</label>
              <input type="email" className="form-control" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Home;
