import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import googleIconImg from "../assets/images/google-icon.svg";
export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Illustration" />
        <strong>Crie Salas de Q &amp; A ao-vivo</strong>
        <p>Tire as duvidas de sua audiencia em tmepo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Asking" />
          <button>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div>Ou entre em uma sala</div>
          <form>
            <input placeholder="Digite o codigo da sala" type="text" />
            <button type="submit">Entrar na sala</button>
          </form>
        </div>
      </main>
    </div>
  );
}
