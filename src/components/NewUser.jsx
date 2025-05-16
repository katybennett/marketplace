import { postUser } from "../api";
import { useState } from "react";

function NewUser() {
  //   const [userDetails, setUserDetails] = useState({
  //     username: "",
  //     avatar_url: "",
  //   });

  function submitForm(e) {
    e.preventDefault();
    // console.log("Name:", e.target.username.value);
    // console.log("Avatar Url:", e.target.avatar_url.value);
    // setUserDetails({
    //   username: e.target.username.value,
    //   avatar_url: e.target.avatar_url.value,
    // });
    // console.log(userDetails);
    postUser(e.target.username.value, e.target.avatar_url.value)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <>
      <h1>new user page</h1>
      <form onSubmit={submitForm} className="new-user-form">
        Username: <input type="text" name="username"></input>
        Avatar Url: <input type="text" name="avatar_url"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewUser;
