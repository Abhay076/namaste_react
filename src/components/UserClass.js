import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
    const { name } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h3>Count - {count}</h3>
        <h3>count2 - {count2}</h3>

        <h2>Name: {name}</h2>
        <h3>Location: Gurugram</h3>
        <h4>Contact: @abhay.yadav_2</h4>
      </div>
    );
  }
}

export default UserClass;
