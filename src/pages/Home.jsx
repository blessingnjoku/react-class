import React from "react";
import About from "./About";
import Button from "../components/Button";
import {Colors} from '../components/Colors'
import Profiles from "./Profiles";




// import '../About.css'


class Home extends React.Component{
      
    constructor(){
        super()
        this.state= {Today:'Monday'}
    }
    
 
    render(){
        return(
            <>

            <Profiles text="Profiles"/>
          
         <h1 className="header"  style={{backgroundColor:Colors.pri }}>Welcome to the Home page  </h1>
        
        {
            this.state.Today === 'Monday'? (<div style={{}}>Happy Monday!</div> ) :
            this.state.Today === 'Tuesday'? (<div>Today is Tuesday</div>):
            this.state.Today === 'Wednesday'? (<div>Today is Wednesday</div>):
            (
                <div>Today Every other day</div>
            )

        }
        
        <Button btnTitle="Register"  onClick={()=>alert("You clicked register")}/>
       


            </>
         

        )
    }
}

export default Home