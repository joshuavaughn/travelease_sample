import jwt from "jsonwebtoken";

async function createToken(user, pass) {
  const refreshToken = jwt.sign({ user: user, pass: pass }, "shh");
  const accessToken = jwt.sign({ user: user, pass: pass }, "shh");
  //   console.log(token);

  return {
    refresh: refreshToken,
    access: accessToken,
  };
}

export default createToken;
