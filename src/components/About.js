import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name="Abhay (Function)" />;
      <UserClass name="first (class)" />
      <UserClass name="second (class)" />
      <UserClass name="third (class)" />

    </div>
  );
};

/*
- Parent Constructor
- Parent render 

     - First Constructor
     - First Render

     - Second Constructor
     - Second Render

     - First ComponentDidMount
     - Second ComponentDidMount

- Parent ComponentDidMount




*/

export default About;
