const User = (props) => {
  const { name } = props;

  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Gurugram</h3>
      <h4>Contact: @abhay.yadav_2</h4>
    </div>
  );
};

export default User;
