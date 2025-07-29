export async function loginReq(input) {
  console.log(input);
  try {
    const result = await fetch("http://localhost:3007/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({
        user: `${input.username}`,
        pass: `${input.password}`,
      }), 
    });

    const data = await result.json();
    console.log(data);
  } catch (err) {
    console.log("login error: ", err);
  }
}

// const input = {
//   username: "bhey",
//   password: "123",
// };

// login(input);
