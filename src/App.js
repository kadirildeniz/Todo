import { auth } from "./firebase"
import LoginPage from "./page/LoginPage"
import HomePage from "./page/HomePage"
import {useAuthState} from "react-firebase-hooks/auth"

function App() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {!user ? <LoginPage/> : <HomePage/>}
    </div>
  );
}

export default App;
