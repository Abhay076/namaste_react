import { useState } from "react";
const User = (props) => {
  const { name } = props;
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h3>Count - {count}</h3>
      <h2>Name: {name}</h2>
      <h3>Location: Gurugram</h3>
      <h4>Contact: @abhay.yadav_2</h4>
    </div>
  );
};

export default User;
