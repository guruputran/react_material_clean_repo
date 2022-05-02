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
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn bg-gradient-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">Body modal</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn bg-gradient-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn bg-gradient-warning">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
