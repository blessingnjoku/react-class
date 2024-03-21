import React, {useState} from "react";
import Button from "../components/Button";
import "../About.css";
import { Colors } from "../components/Colors";
import Profiles from "./Profiles";
import { UsersProfiles } from "../components/UserData";




const About = ({title}) => {
  const [header, setHeader] = useState('About Profiles')
  const [items, setItems]=useState(UsersProfiles)

  const handleOnclick = () => {
    alert("You clicked Login");



  };
  return (
    <div>
        {
        items.map((val, key)=>{
          return(
            <Profiles text={header}  onclick={()=>setHeader('About')}
            key={key}
            first_name={val.firstname}
            last_name={val.lastname}
            Email={val.email}
            Hobbies={val.hobbies}
  

      
            />
          )
        })
      }

    
    
      <h1 className="header">{title}</h1>
      <p style={{backgroundColor:Colors.pri}}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        nostrum nihil impedit sint nam natus consectetur ipsum nesciunt facilis
        eaque molestias culpa doloremque soluta rerum, delectus itaque ex nisi
        ipsa.
      </p>

      <Button btnTitle="Login" onClick={handleOnclick} />
    </div>
  );
};
export default About;
