import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>User Name: {user}</h2>
      <button onClick={() => setUser("Mohan")}>
        Change User
      </button>
    </div>
  );
}

export default Profile;