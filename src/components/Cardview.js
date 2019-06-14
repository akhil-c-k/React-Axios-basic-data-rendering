import React from "react";

import axios from "axios";
import image from "../images/1.jpeg";
import "../mainstyles.scss";
export default class Cardview extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div className="container">
        <h1>React Card</h1>
        {/* loop state here */}
        {this.state.persons.map(person => (
          <div className="card-wrapper">
            <div className="image-wrapper">
              <img src={image} />
            </div>
            <div className="description-wrapper">
              <h2>{person.name}</h2>
              <p>{person.address.street}</p>
              <button>More</button>
            </div>
            {/* {this.state.persons.map(person => (
          <li>{person.name}</li>
        ))} */}
          </div>
        ))}
        {/* loop state  enfs here */}
      </div>
    );
  }
}
