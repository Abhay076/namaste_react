import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "abhay",
      },
    };
    console.log("costructor", this.props.name);
  }
  // constructor=>render()=>componentDidMount
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/abhay076");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
    // console.log("componentDidMount", this.props.name);
  }
  render() {
    // const { name } = this.props;
    // console.log("render", name);
    const { name, location, avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @abhay.yadav_2</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 *
 * ------- MOUNTING -----
 *
 * Constructor (dummy)
 * Render (dummy)
 *       <HTML Dummy>
 *       <this.setState> => State variable is updated
 *
 *
 * -------- UPDATE
 *
 *         render(API Data)
 *         <HTML (new API data>)
 *         componentDid Update
 *
 *
 */
