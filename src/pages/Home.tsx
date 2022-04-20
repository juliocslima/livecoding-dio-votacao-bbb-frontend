import MascoteBBB from '../assets/images/mascote-bbb.png';
import logoBBB from '../assets/images/bbb-big-brother-brasil.svg';
import logoGoogle from '../assets/images/google-icon.svg';
import logoGithub from '../assets/images/github-icon.svg';
import loginIcon from '../assets/images/login-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';

export function Home() {

  return(
    <div id="page-auth">
      <aside>
        <img src={MascoteBBB} alt="" />
        <strong>Paredão BBB22: Vote para eliminar.</strong>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoBBB} alt="Big Brother Brasil" color="#000" />
          <button className="login-with-google">
            <img src={logoGoogle} alt="Google" />
            Acesse com o Google
          </button>

          <button className="login-with-github">
            <img src={logoGithub} alt="Github" />
            Acesse com o Github
          </button>

          <div className="separator">ou acesse com login/senha</div>

          <form>
            <input
              type="text"
              placeholder="Digite seu e-mail"
            />
            <input
              type="password"
              placeholder="Digite sua senha"
            />
            <Button type="submit">
              <img src={loginIcon} alt="Login" />
              Login
            </Button>
          </form>
          <div className="cadastro">Não tem senha? Cadastre-se aqui</div>
        </div>
      </main>
    </div>
  );
}