import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from "./components/movie";
import Info from "./components/info";




class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
     selectedMovie : null
  };
  }
  componentDidMount() {
    this.getMovieData();
  }
  
  getMovieData = () => {
    fetch("http://www.omdbapi.com/?apikey=b2025b54&t=pretty+woman")
    .then(
      response => response.json()
      ).then(
        result => this.setState(
          {
            selectedMovie: result
          },
        () => console.log("setState Completed", this.state.selectedMovie)
      )
    );
  };



  render () {
    console.log(this.state)
    const { selectedMovie } = this.state;
    if (!selectedMovie) {                                        
      return <div>Hold tight while movie are being fetched...</div>; 
    }  else {
    // let { data } = this.state.selectedMovie;
   return (
    <div className="App">
      <header className="App-header">
       <Movie title={this.state.selectedMovie.Title} />
       <Info   actors={selectedMovie.Actors}  genre={selectedMovie.Genre} director = {selectedMovie.Director}/>
      </header>
    </div>
  )};
  }
}

export default App;
