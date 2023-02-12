import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h1> Music Station</h1>
            </div>
            <div className="item-menu">
              <a href="">Login</a>
            </div>
          </div>
          <div className="body">
            <div className="menu-body">
              <div className="see-now">
                <a href="">Ouvir agora</a>
              </div>
              <div className="radio-strokes">
                <a href="https://youtu.be/nQTeRMjiykA">Radio The Strokes</a>
              </div>
              <div className="radio-strokes">
                <a href="https://www.cifraclub.com.br/">TablaturaClub</a>
              </div>
            </div>

            <div className="form">
              <form>
                <div className="form-title">
                  <h2>Envie uma sugestão de musica</h2>
                </div>

                <div className="items-form">
                  <input placeholder="Digite seu email" type="text" />
                  <input
                    placeholder="Informe a musica que voce deseja"
                    type="text"
                  />
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="baseboard">
        <div className="center">
          <div className="content">
            <h3>Ouça as melhores musicas</h3>
            <p>
              Nossa site conta com uma IA curadoria que entende o seu perfil e
              envia as melhores musicas de acordo com o seu gosto.
            </p>
          </div>
          <div className="content">
            <h3>Radio The Strokes</h3>
            <p>Ouça o melhor de uma das melhores bandas de rock já criada!</p>
          </div>
          <div className="content">
            <h3>Estude musica</h3>
            <p>
              Estude de graça e onde quiser com o site{" "}
              <a href="">TablaturaClub</a>, aprenda a tocar suas musicas
              favoritas.
            </p>
          </div>
          <div className="content">
            <h3>Envie-nos uma sugestão</h3>
            <p>
              Não encontrou a musica que voce queria nos envie o nome dela para
              ser adicionada ao site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
