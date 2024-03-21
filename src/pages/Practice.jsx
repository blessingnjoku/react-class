import React from "react";

class Practice extends React.Component{
    constructor(){
        super()
        this.state= "Hello"
    }

    handleChange =()=>{
   
        alert('Hello World')
    }
    
    render(){
        return(
            <div>
              <h1>{this.state}</h1>
              <button onClick={this.handleChange}>Change</button>
            </div>
        )

        
    }
}

export default Practice