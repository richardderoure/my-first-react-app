import React from "react"

 


// function  Info () {
//     let {data}  = this.props 
//     return (
//         <header className="App-header">
//         <h1>{data.Genre}</h1> 
//         </header>
//     );
    
// }
class Info extends React.Component {

    render () {
      console.log(this.props)
        // const {data} = this.props
        return (
            <h1>{this.props.genre}</h1>
        )


        }
    }


export default Info;