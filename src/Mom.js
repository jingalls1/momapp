import React from "react";
import "./styles.css";
import { picArr } from "./momPics.js";

export default class Mom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: 0 };
  }
  nextImageHandler = () => {
    if (this.state.img < picArr.length - 1) {
      this.setState({ img: this.state.img + 1 });
    } else {
      this.setState({ img: 0 });
    }
  };
  render() {
    return (
      <div>
        <h1 className="title">Happy Mother's Day Mom &hearts;</h1>
        <img
          src={picArr[this.state.img]}
          alt="picForMom"
          style={{
            width: "100%",
            borderRadius: "16%",
            textAlign: "center"
          }}
          onClick={this.nextImageHandler}
        />
        <h2 className="title">so many memories...</h2>
        <h3 className="title2">love you so much!</h3>
      </div>
    );
  }
}
