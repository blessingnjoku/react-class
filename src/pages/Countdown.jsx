
import React, { Component } from 'react'

 class Countdown extends Component {
    constructor(){
        super()
        this.state = {Count: 0};
        this.Time = null;
     
    }
 

    // handleChnage=()=>{
    //     this.setState({Count: this.state.Count + 1})
    
         
    // }

    componentDidMount(){
        this.Time = setInterval(() => {
            this.setState({Count: this.state.Count + 1})
            
        }, 2000);
    }


    componentWillUnmount(){
      
            clearInterval(this.Time)
        
      
    }


  

  render() {
    return (
      <div>
        Countdown
     
        <h1>{this.state.Count} </h1>
        <button onClick={this.handleChnage}>Change</button>
      </div>
    )
  }
}
export default Countdown