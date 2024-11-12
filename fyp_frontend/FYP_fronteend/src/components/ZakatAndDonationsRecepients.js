import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ZakatAndDonationsRecepients = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    console.log('here');
    fetch("http://localhost:8000/users/all")
      .then(response => response.json())
      .then(data => {
        console.log('here');
        setUsers(data);
      })
      .catch(err => console.log('Error fetching users:', err));
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div className="container profile-page">
      <div className="row">
        {users && users.map((user) => (
          <div className="col-xl-6 col-lg-7 col-md-12" key={user._id}>
            <div className="card profile-header">
              <div className="body">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-12">
                    <div className="profile-image float-md-right">
                      <img
                        src={`http://localhost:8000/${user.picture}`}
                        alt={user.name}
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-12">
                    <h4 className="m-t-0 m-b-0">
                      <strong>{user.name}</strong>
                    </h4>
                    {/* <span className="job_post">Deserving</span> */}
                    <p>
                      {user.address} <br />
                      Verified <i className="fas fa-check"></i>
                    </p>
                    <Link to={`/recipient/${user._id}`}>
                      <button className="btn btn-primary btn-round btn-simple">
                        Donate
                      </button>
                    </Link>
                    <p className="social-icon m-t-5 m-b-0">
                      <a title="Facebook" href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      {/* Add more social icons as needed */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZakatAndDonationsRecepients;
