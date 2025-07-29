export async function registerReq(input) {
  try {
    const { username, firstname, lastname, password, confirm_password } = input;

    if (password != confirm_password) {
      console.log("nah don match");
      return;
      //throw an error "password don't match"
    }

    const result = await fetch("http://localhost:3007/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: `${username}`,
        firstname: `${firstname}`,
        lastname: `${lastname}`,
        pass: `${password}`,
      }),
    });
    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log("registration error: ", err);
  }
}
