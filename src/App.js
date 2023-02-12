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
            </div>

            <div className="form">
              <form>
                <div className="form-title">
                  <h2>Envie uma sugestão de musica</h2>
                </div>

                <div className="items-form">
                  <input placeholder="Digite seu email" type="text" />
                  <input placeholder="Informe a musica que voce deseja agora" type="text" />
                  <input type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
