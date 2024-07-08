import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("costructor");
  }
  // constructor=>render()=>componentDidMount
  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("render");
    return (
      <div className="user-card">
        <h3>Count - {count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>

        <h2>Name: {name}</h2>
        <h3>Location: Gurugram</h3>
        <h4>Contact: @abhay.yadav_2</h4>
      </div>
    );
  }
}

export default UserClass;
