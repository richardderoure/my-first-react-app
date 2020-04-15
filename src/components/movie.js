import React from "react";

 


// function Movie () {
//     let {data}  = this.props 
//     return (
//         <header className="App-header">
//         <h1>{data.Title}</h1> 
//         </header>
//     );
    
// }
class Movie extends React.Component {

    render () {

        // const { data } = this.props;
       
        return (
            <h1>{this.props.title}</h1>
        )


        }
    }


export default Movie;