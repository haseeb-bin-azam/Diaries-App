import React, { ReactElement, useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../features/auth/authSlice";

interface Props {}
// eslint-disable-next-line
function Signup({}: Props): ReactElement {
  const [user, setUser] = useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(signUpUser(user));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="loginBody">
      <div className="simple-login-container">
        <div className="login-box">
          <div className="bg"></div>
          <div className="container animated fadeIn">
            <h2>SignUp</h2>
            <hr />
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                />
              </div>
              <input type="submit" className="button" value="SignUp" />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
