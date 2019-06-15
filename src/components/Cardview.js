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

        {this.state.persons.map(({ name, address: { street } }) => (
          <div className="card-wrapper">
            <div className="image-wrapper">
              <img src={image} />
            </div>
            <div className="description-wrapper">
              <h2>{name}</h2>
              <p>{street}</p>
              <button>More</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
