import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { auth } from "./services/firebase";

type User = {
  id: string;
  name: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error("Missing information form Google Account.");
      }
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    }
  }

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Route path="/" exact component={Home} />
        <Route path="/room/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
