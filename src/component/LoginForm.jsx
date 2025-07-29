import { useState } from "react";
import { loginReq } from "../utils/loginReq";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginReq(input);
    navigate("/home");
  };

  return (
    <>
      <h1>Travel Ease</h1>

      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="passwork">Password: </label>
        <input
          type="password"
          name="password"
          id="passwork"
          onChange={handleInputChange}
        />{" "}
        <br />
        <input type="submit" value="Log in" onClick={handleSubmit} />
      </form>

      <p>
        dont have an account?{" "}
        <span>
          <Link to="/register">Register Here</Link>
        </span>
      </p>
    </>
  );
}

export default LoginForm;
