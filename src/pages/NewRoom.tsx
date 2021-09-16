import { Link } from "react-router-dom";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import "../styles/auth.scss";
import { Button } from "../components/Button";
export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form>
            <input placeholder="Nome da Sala" type="text" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entar em uma sala existente? <Link to="/">Clique aqui</Link>{" "}
          </p>
        </div>
      </main>
    </div>
  );
}
