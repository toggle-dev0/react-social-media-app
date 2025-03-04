import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const signUserOut = async () => await signOut(auth);
  return (
    <nav>
      <Link to="/">Home</Link>
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <Link to="/createpost">Create post</Link>
      )}
      <div>
        {user && (
          <>
            <p>User: {user?.displayName}</p>
            <img src={user?.photoURL || ""} alt="" />
            <button onClick={signUserOut}>Log Out</button>
          </>
        )}
      </div>
    </nav>
  );
}
