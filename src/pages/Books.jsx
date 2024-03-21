import React, { useState } from "react";
import Profiles from "./Profiles";
import { Data } from "../components/UserData";

const Books = (props) => {
  const [profile, setProfile] = useState(Data)
  return (
    <div>
      <h1>Books</h1>
      <h1>{props.bookTitle}</h1>
      <p>{props.author}</p>
      <i>{props.year}</i>

      {profile.map((val, key) => {
        return (
          <div> 
            <Profiles
              key={key}
              first_name={val.firstname}
              last_name={val.lastname}
              Email={val.email}
              Hobbies={val.hobbies}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Books;
