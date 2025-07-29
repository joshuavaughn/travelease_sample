import { useState } from "react";
import { registerReq } from "../utils/registerReqs";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log("input data");
    console.log(input);
    registerReq(input);
    navigate("/");
  };

  return (
    <>
      <h1>Register Here</h1>

      <form>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="first_name">First Name: </label>
        <input
          type="text"
          name="firstname"
          id="first_name"
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="last_name">Last Name: </label>
        <input
          type="text"
          name="lastname"
          id="last_name"
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
        />{" "}
        <br />
        <label htmlFor="confirm_password">Confirm Password: </label>
        <input
          type="password"
          name="confirm_password"
          id="confirm_password"
          onChange={handleInputChange}
        />{" "}
        <br />
        <input
          type="submit"
          name=""
          id="submit"
          value="register"
          onClick={handleClick}
        />
      </form>
    </>
  );
}

export default RegisterForm;
