import React, { Component } from "react";
import Img from "./components/image";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import imageArray from "./imageArray.json";

const alreadygussed=[]

class App extends Component {
  // Setting this.state.friends to the friends json array

  state = {
    imageArray,
    score: 0,
  };


  randomize = () => {
    console.log("randomize")
    imageArray.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({ imageArray })
  }

  clickhandler = id => {
    console.log(id)
    console.log(alreadygussed)
    if(alreadygussed.length<1){this.setState({score: this.state.score+1})}
    for(let i=0;i<alreadygussed.length;i++){
      if(id!==alreadygussed[i]){
        this.setState({score: this.state.score+1})
      }
      else{
        alert("you lose!")
        this.setState({score: 0})
        alreadygussed.length=0
      }
    }
    this.randomize();
    alreadygussed.push(id)
  }

  render() {
    return (
      <div>
        <h3><p>Score: {this.state.score}</p></h3>
        <br /><br />
        <p>Click an image. If you click the same image twice, you lose.</p>

        <Title>Memory Game!</Title>
        <br />
        <h3>
        </h3>
      <Wrapper>

        {this.state.imageArray.map(image  => (
          <Img
            clickhandler={this.clickhandler}
            id={image.key}
            key={image.key}
            name={image.name}
            image={image.image}
          />
        ))}
      </Wrapper>
      </div>

    );
  }
}

export default App;
