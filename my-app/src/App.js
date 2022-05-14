import React, { Component } from 'react';
import Test from "./Test";


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      // 1-misol
      // data: "Samar Badriddinov"

      // 2-misol
      // posts: [],
      // loading: true,
      // comments: []

      // 3-misol
      // favouriteColor: "crimson"

      // componentWillUnmount 4-misol 
      show: true
    }
  }

  // 1-misol
  // getData() {
  //   setTimeout(() => {
  //     console.log("our data is updated");
  //     this.setState({data: "Shohrux Meliboyev"})
  //   }, 3000)
  // }

  // componentDidMount() {
  //   this.getData()
  // }
  

  // 2-misol
  // componentDidMount() {
  //   // this.getData()
  //   console.log("componentDidMount");
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(data => this.setState({posts: data, loading: false}))

  //   this.timerId = setInterval(() => {
  //     fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then(response => response.json())
  //     .then(data => this.setState({comments: data}))
  //   }, 3000)
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }
  

  // 3-misol

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   setTimeout(() => {
  //     this.setState({favouriteColor: "yellow"})
  //   }, 3000)
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  //   document.querySelector("p").innerHTML = "The updated favouirute color" + this.state.favouriteColor
  // }
  

  // componentWillUnmount 4-misol

  getData = () => {
    this.setState({show: false})
  }
  
  render() {
    let myheader;
    if(this.state.show){
      myheader = <Test />
    }
    
    console.log("RENDER IWLADI....");
    return (
      <div>
      {/* 1-misol, 2-misol
        {this.state.loading ? <h3>Loading...</h3> : 
          <h3>{this.state.posts.length} was loaded, and have {this.state.comments.length}</h3>
        } */}

        {/* 3-misol
        <p>My favourite color is {this.state.favouriteColor}</p> */}

        {/* componentWillUnmount 4-misol */}
        {myheader}
        <button type="button" onClick={this.getData}>Delete Header</button>
      </div>
    )
  }
}

export default App