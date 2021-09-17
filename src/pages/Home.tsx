import { useHistory } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
import {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
} from "../services/firebase";

export function Home() {
  const history = useHistory();
  function handleCreateRoom() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      history.push("/room/new");
    });
  }
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Crie Salas de Q &amp; A ao-vivo</strong>
        <p>Tire as duvidas de sua audiencia em tmepo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Asking" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">Ou entre em uma sala</div>
          <form>
            <input placeholder="Digite o codigo da sala" type="text" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
